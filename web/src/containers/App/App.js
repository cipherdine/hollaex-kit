import React, { Component } from 'react';
import classnames from 'classnames';
import EventListener from 'react-event-listener';
import moment from 'moment';
import STRINGS from '../../config/localizedStrings';
import {
	ICONS,
	FLEX_CENTER_CLASSES,
	EXCHANGE_EXPIRY_DAYS,
	FIT_SCREEN_HEIGHT
} from '../../config/constants';
import { isBrowser, isMobile } from 'react-device-detect';

import {
	NOTIFICATIONS,
	CONTACT_FORM,
	HELPFUL_RESOURCES_FORM,
	FEES_STRUCTURE_AND_LIMITS,
	RISK_PORTFOLIO_ORDER_WARING,
	RISKY_ORDER,
	LOGOUT_CONFORMATION
} from '../../actions/appActions';

import {
	getThemeClass,
	getChatMinimized,
	setChatMinimized
} from '../../utils/theme';
import { checkUserSessionExpired } from '../../utils/utils';
import { getTokenTimestamp, isLoggedIn } from '../../utils/token';
import {
	AppBar,
	AppMenuBar,
	Sidebar,
	SidebarBottom,
	Dialog,
	Notification,
	MessageDisplay,
	CurrencyList,
	SnackNotification,
	SnackDialog
} from '../../components';
import {
	ContactForm,
	HelpfulResourcesForm,
	Chat as ChatComponent,
	DepositFunds
} from '../';
import ReviewEmailContent from '../Withdraw/ReviewEmailContent';
import FeesAndLimits from '../Summary/components/FeesAndLimits';
import SetOrderPortfolio from '../UserSettings/SetOrderPortfolio';
import LogoutConfirmation from '../Summary/components/LogoutConfirmation';
import RiskyOrder from '../Trade/components/RiskyOrder';
import AppFooter from '../../components/AppFooter';

import {
	getClasesForLanguage,
	getFontClassForLanguage
} from '../../utils/string';

import Socket from './Socket';
import Container from './Container';

class App extends Component {
	state = {
		appLoaded: true,
		dialogIsOpen: false,
		chatIsClosed: false,
		publicSocket: undefined,
		privateSocket: undefined,
		idleTimer: undefined,
		ordersQueued: [],
		limitFilledOnOrder: '',
		sidebarFitHeight: false
	};
	ordersQueued = [];
	limitTimeOut = null;

	componentWillMount() {
		const chatIsClosed = getChatMinimized();
		this.setState({
			chatIsClosed
		});
		if (isLoggedIn() && checkUserSessionExpired(getTokenTimestamp())) {
			this.logout('Token is expired');
		}
	}

	componentDidMount() {
		this.updateThemeToBody(this.props.activeTheme);
		if (this.props.location && this.props.location.pathname) {
			this.checkPath(this.props.location.pathname);
			this.handleFitHeight(this.props.location.pathname);
		}
	}

	componentWillReceiveProps(nextProps) {
		if (
			nextProps.activeNotification.timestamp !==
			this.props.activeNotification.timestamp
		) {
			if (nextProps.activeNotification.type !== '') {
				this.onOpenDialog();
			} else {
				this.onCloseDialog();
			}
		} else if (
			!nextProps.activeNotification.timestamp &&
			this.state.dialogIsOpen
		) {
			this.onCloseDialog();
		}
		if (
			!this.props.verification_level &&
			nextProps.verification_level !== this.props.verification_level &&
			nextProps.verification_level === 1
		) {
			// this.goToAccountPage();
		}
		if (this.props.activeTheme !== nextProps.activeTheme) {
			this.updateThemeToBody(nextProps.activeTheme);
		}
		if (
			this.props.location &&
			nextProps.location &&
			this.props.location.pathname !== nextProps.location.pathname
		) {
			this.checkPath(nextProps.location.pathname);
			this.handleFitHeight(nextProps.location.pathname);
		}
	}

	componentWillUnmount() {
		if (this.state.publicSocket) {
			this.state.publicSocket.close();
		}

		if (this.state.privateSocket) {
			this.state.privateSocket.close();
		}

		if (this.state.idleTimer) {
			clearTimeout(this.state.idleTimer);
		}
		clearTimeout(this.limitTimeOut);
	}

	checkPath = (path) => {
		var sheet = document.createElement('style');
		if (path === 'login' || path === 'signup') {
			sheet.innerHTML = '.grecaptcha-badge { display: unset !important;}';
			sheet.id = 'addCap';
			if (document.getElementById('rmvCap') !== null) {
				document.body.removeChild(document.getElementById('rmvCap'));
			}
		} else {
			sheet.innerHTML = '.grecaptcha-badge { display: none !important;}';
			sheet.id = 'rmvCap';
			if (document.getElementById('addCap') !== null) {
				document.body.removeChild(document.getElementById('addCap'));
			}
		}
		document.body.appendChild(sheet);
	};

	handleFitHeight = (path) => {
		let pathname = this.getClassForActivePath(path);
		if (path.indexOf('/trade/add/tabs') !== -1) {
			pathname = '/trade/add/tabs';
		}
		this.setState({ sidebarFitHeight: FIT_SCREEN_HEIGHT.includes(pathname) });
	};

	updateThemeToBody = (theme) => {
		const themeName = theme === 'dark' ? 'dark-app-body' : '';
		if (document.body) {
			document.body.className = themeName;
		}
	};

	goToPage = (path) => {
		if (this.props.location.pathname !== path) {
			this.props.router.push(path);
		}
	};

	goToAccountPage = () => this.goToPage('/account');
	goToVerificationPage = () => this.goToPage('/verification');
	goToDashboard = () => this.goToPage('/');
	goToXHTTrade = () => this.goToPage('/trade/xht-usdt');

	logout = (message = '') => {
		this.setState({ appLoaded: false }, () => {
			this.props.logout(typeof message === 'string' ? message : '');
		});
	};

	onOpenDialog = () => {
		this.setState({ dialogIsOpen: true });
	};

	onCloseDialog = () => {
		this.setState({ dialogIsOpen: false });
		this.props.closeNotification();
	};

	minimizeChat = () => {
		const chatIsClosed = !this.state.chatIsClosed;
		if (chatIsClosed === false) {
			this.props.setChatUnreadMessages();
		}
		setChatMinimized(chatIsClosed);
		this.setState({ chatIsClosed });
	};

	onConfirmEmail = () => {
		this.onCloseDialog();
		this.props.router.push('/wallet');
	};

	getClassForActivePath = (path) => {
		switch (path) {
			case '/wallet':
				return 'wallet';
			case '/account':
			case '/developers':
			case '/security':
			case '/verification':
			case '/settings':
			case '/summary':
			case '/api':
				return 'account';
			case '/quick-trade':
				return 'quick-trade';
			case '/trade':
				return 'trade';
			case '/chat':
				return 'chat';
			case '/home':
				return 'home';
			default:
		}
		if (path.indexOf('/trade/') === 0) {
			return 'trade';
		} else if (path.indexOf('/quick-trade/') === 0) {
			return 'quick-trade';
		}

		return '';
	};

	renderDialogContent = ({ type, data }, prices) => {
		switch (type) {
			case NOTIFICATIONS.ORDERS:
			case NOTIFICATIONS.TRADES:
			case NOTIFICATIONS.WITHDRAWAL:
				return (
					<Notification
						type={type}
						data={data}
						openContactForm={this.props.openContactForm}
						onClose={this.onCloseDialog}
					/>
				);
			case NOTIFICATIONS.DEPOSIT:
				return (
					<Notification
						type={type}
						data={{
							...data,
							// price: prices[data.currency],
							coins: this.props.coins
						}}
						onClose={this.onCloseDialog}
						goToPage={this.goToPage}
						openContactForm={this.props.openContactForm}
					/>
				);
			case NOTIFICATIONS.ERROR:
				return (
					<MessageDisplay
						iconPath={ICONS.RED_WARNING}
						onClick={this.onCloseDialog}
						text={data}
					/>
				);
			case CONTACT_FORM:
				return (
					<ContactForm
						onSubmitSuccess={this.onCloseDialog}
						onClose={this.onCloseDialog}
						data={data}
					/>
				);
			case HELPFUL_RESOURCES_FORM:
				return (
					<HelpfulResourcesForm
						onSubmitSuccess={this.onCloseDialog}
						onClose={this.onCloseDialog}
						data={data}
					/>
				);
			case NOTIFICATIONS.NEW_ORDER: {
				const { onConfirm, ...rest } = data;
				return (
					<Notification
						type={type}
						data={rest}
						onConfirm={data.onConfirm}
						onBack={this.onCloseDialog}
					/>
				);
			}
			case NOTIFICATIONS.WITHDRAWAL_EMAIL_CONFIRMATION:
				return (
					<ReviewEmailContent
						onConfirmEmail={this.onConfirmEmail}
						onClose={this.onCloseDialog}
					/>
				);
			case FEES_STRUCTURE_AND_LIMITS:
				return (
					<FeesAndLimits
						type={type}
						data={data}
						onClose={this.onCloseDialog}
						activeTheme={this.props.activeTheme}
					/>
				);
			case RISK_PORTFOLIO_ORDER_WARING:
				return <SetOrderPortfolio data={data} onClose={this.onCloseDialog} />;
			case LOGOUT_CONFORMATION:
				return (
					<LogoutConfirmation
						data={data}
						onConfirm={() => {
							this.logout();
							this.onCloseDialog();
						}}
						onClose={this.onCloseDialog}
					/>
				);
			case RISKY_ORDER: {
				const { onConfirm, ...rest } = data;
				return (
					<RiskyOrder
						data={{
							coins: this.props.coins,
							...rest
						}}
						onConfirm={onConfirm}
						onClose={this.onCloseDialog}
					/>
				);
			}
			case NOTIFICATIONS.INVITE_FRIENDS: {
				const { onConfirm, ...rest } = data;
				return (
					<Notification
						type={type}
						data={rest}
						onConfirm={data.onConfirm}
						onBack={this.onCloseDialog}
					/>
				);
			}
			case NOTIFICATIONS.STAKE_TOKEN: {
				const { onConfirm, ...rest } = data;
				return (
					<Notification
						type={type}
						data={rest}
						onConfirm={data.onConfirm}
						onBack={this.onCloseDialog}
					/>
				);
			}
			case NOTIFICATIONS.DEPOSIT_INFO: {
				const { gotoWallet, ...rest } = data;
				return <DepositFunds data={rest} gotoWallet={gotoWallet} />;
			}
			case NOTIFICATIONS.WAVE_NOTIFICATION: {
				const { onConfirm, ...rest } = data;
				return (
					<Notification
						type={type}
						data={{
							pair: this.props.pair,
							...rest
						}}
						onConfirm={this.goToXHTTrade}
						onBack={this.onCloseDialog}
					/>
				);
			}
			default:
				return <div />;
		}
	};

	onChangeLanguage = (language) => () => {
		return this.props.changeLanguage(language);
	};

	isSocketDataReady() {
		const { orderbooks, pairsTrades, pair, router } = this.props;
		let pairTemp = pair;
		// return (Object.keys(orderbooks).length && orderbooks[pair] && Object.keys(orderbooks[pair]).length &&
		// 	Object.keys(pairsTrades).length);
		if (router && router.params && router.params.pair) {
			pairTemp = router.params.pair;
		}
		return (
			Object.keys(orderbooks).length &&
			orderbooks[pairTemp] &&
			Object.keys(pairsTrades).length
		);
	}

	render() {
		const {
			symbol,
			pair,
			children,
			activeNotification,
			prices,
			// verification_level,
			activeLanguage,
			// openContactForm,
			openHelpfulResourcesForm,
			activeTheme,
			unreadMessages,
			router,
			location,
			info
			// user
		} = this.props;
		const {
			dialogIsOpen,
			appLoaded,
			chatIsClosed,
			sidebarFitHeight
		} = this.state;
		const languageClasses = getClasesForLanguage(activeLanguage, 'array');
		const fontClass = getFontClassForLanguage(activeLanguage);

		const shouldCloseOnOverlayClick = activeNotification.type !== CONTACT_FORM;
		const activePath = !appLoaded
			? ''
			: this.getClassForActivePath(this.props.location.pathname);
		const isMenubar = activePath === 'account' || activePath === 'wallet';
		const expiryDays =
			EXCHANGE_EXPIRY_DAYS - moment().diff(info.created_at, 'days');
		return (
			<div>
				<Socket
					router={router}
					location={location} />
				<div
					className={classnames(
						getThemeClass(activeTheme),
						activePath,
						symbol,
						fontClass,
						languageClasses[0],
						{
							'layout-mobile': isMobile,
							'layout-desktop': isBrowser
						}
					)}
				>
					<div
						className={classnames(
							'app_container',
							'd-flex',
							getThemeClass(activeTheme),
							activePath,
							symbol,
							fontClass,
							languageClasses[0],
							{
								'layout-mobile': isMobile,
								'layout-desktop': isBrowser
							}
						)}
					>
						<EventListener
							target="window"
							onResize={this.resetTimer}
							onScroll={this.resetTimer}
							onMouseMove={this.resetTimer}
							onClick={this.resetTimer}
							onKeyPress={this.resetTimer}
						/>
						<div className="d-flex flex-column f-1">
							<AppBar
								router={router}
								location={location}
								goToDashboard={this.goToDashboard}
								logout={this.logout}
								activePath={activePath}
								onHelp={openHelpfulResourcesForm}
								rightChildren={
									<CurrencyList
										className="horizontal-currency-list justify-content-end"
										activeLanguage={activeLanguage}
									/>
								}
							/>
							{info.is_trial ? (
								<div
									className={classnames(
										'w-100',
										'p-1',
										...FLEX_CENTER_CLASSES,
										'exchange-trial'
									)}
								>
									{STRINGS.formatString(
										STRINGS.TRIAL_EXCHANGE_MSG,
										STRINGS.APP_TITLE,
										expiryDays
									)}
								</div>
							) : null}
							{isBrowser && isMenubar && isLoggedIn() ? (
								<AppMenuBar router={router} location={location} />
							) : null}
							<div
								className={classnames(
									'app_container-content',
									'd-flex',
									'justify-content-between',
									{
										'app_container-secondary-content': isMenubar
									}
								)}
							>
								<div
									className={classnames(
										'app_container-main',
										'd-flex',
										'flex-column',
										'justify-content-between',
										{
											'overflow-y': !isMobile
										}
									)}
								>
									<Container
										router={router}
										children={children}
										appLoaded={appLoaded}
										isReady={this.isSocketDataReady()}
									/>
								</div>
								{isBrowser && (
									<div className="app_container-sidebar">
										<Sidebar
											activePath={activePath}
											logout={this.logout}
											// help={openContactForm}
											theme={activeTheme}
											isLogged={isLoggedIn()}
											help={openHelpfulResourcesForm}
											pair={pair}
											minimizeChat={this.minimizeChat}
											chatIsClosed={chatIsClosed}
											unreadMessages={unreadMessages}
											sidebarFitHeight={sidebarFitHeight}
										/>
									</div>
								)}
								<Dialog
									isOpen={dialogIsOpen}
									label="hollaex-modal"
									className={classnames('app-dialog', {
										'app-dialog-flex':
											activeNotification.type === NOTIFICATIONS.DEPOSIT_INFO
									})}
									onCloseDialog={this.onCloseDialog}
									shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
									theme={activeTheme}
									showCloseText={
										!(
											activeNotification.type === CONTACT_FORM ||
											activeNotification.type === HELPFUL_RESOURCES_FORM ||
											activeNotification.type === NOTIFICATIONS.NEW_ORDER ||
											(activeNotification.type === NOTIFICATIONS.TRADES &&
												!isMobile) ||
											(activeNotification.type === NOTIFICATIONS.ORDERS &&
												!isMobile) ||
											activeNotification.type === NOTIFICATIONS.ERROR
										)
									}
									compressed={
										activeNotification.type === NOTIFICATIONS.ORDERS ||
										activeNotification.type === NOTIFICATIONS.TRADES
									}
									style={{ 'z-index': 100 }}
								>
									{dialogIsOpen &&
										this.renderDialogContent(
											activeNotification,
											prices,
											activeTheme
										)}
								</Dialog>
								{!isMobile && (
									<ChatComponent
										minimized={chatIsClosed}
										onMinimize={this.minimizeChat}
										chatIsClosed={chatIsClosed}
									/>
								)}
							</div>
							{isMobile && (
								<div className="app_container-bottom_bar">
									<SidebarBottom
										isLogged={isLoggedIn()}
										activePath={activePath}
										pair={pair}
									/>
								</div>
							)}
						</div>
					</div>
					<SnackNotification />
					<SnackDialog />
				</div>
				<div
					className={classnames(getThemeClass(activeTheme), {
						'layout-mobile': isMobile,
						'layout-desktop': isBrowser
					})}
				>
					{!isMobile && <AppFooter theme={activeTheme} />}
				</div>
			</div>
		);
	}
}

export default App;