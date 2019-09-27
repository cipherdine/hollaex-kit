import config from './index';

import STRINGS from './localizedStrings';

export const ENV = process.env.NODE_ENV || 'development';
export const NETWORK = process.env.REACT_APP_NETWORK || 'testnet';

export const APP_TITLE = STRINGS.APP_TITLE;

export const TOKEN_TIME = 24 * 60 * 60 * 1000; // 1 day
export const SESSION_TIME = 6 * 60 * 60 * 1000; // 6 hour

export const API_URL = config[ENV].API_URL;
export const WS_URL = config[ENV].WS_URL;

export const ICONS = {
	LOGO_GREY: `${process.env.PUBLIC_URL}/assets/hollaEx_logo-grey.svg`,
	LOGO_BLACK: `${process.env.PUBLIC_URL}/assets/hollaEx_logo-blk.svg`,
	TRADE_HISTORY_DARK: `${
		process.env.PUBLIC_URL
	}/assets/icons/trade-history-dark.svg`,
	TRADE_HISTORY_LIGHT: `${
		process.env.PUBLIC_URL
	}/assets/icons/trade-history-light.svg`,
	ACTIVE_TRADE_DARK: `${
		process.env.PUBLIC_URL
	}/assets/icons/active-trade-dark.svg`,
	ACTIVE_TRADE_LIGHT: `${
		process.env.PUBLIC_URL
	}/assets/icons/active-trade-light.svg`,
	DEMO_LOGIN_ICON_DARK: `${
		process.env.PUBLIC_URL
	}/assets/icons/demo-login-icon-dark.svg`,
	DEMO_LOGIN_ICON_LIGHT: `${
		process.env.PUBLIC_URL
	}/assets/icons/demo-login-icon-light.svg`,
	CANCEL_WITHDRAW_DARK: `${
		process.env.PUBLIC_URL
	}/assets/icons/cancel-withdraw-dark-02-03.svg`,
	CANCEL_WITHDRAW_LIGHT: `${
		process.env.PUBLIC_URL
	}/assets/icons/cancel-withdraw-light-02.svg`,
	BTC_ICON_DARK: `${process.env.PUBLIC_URL}/assets/icons/btc-icon-dark-01.svg`,
	BTC_ICON: `${process.env.PUBLIC_URL}/assets/icons/btc-icon-01.svg`,
	ETH_ICON: `${process.env.PUBLIC_URL}/assets/icons/eth-icon-01.svg`,
	ETH_ICON_DARK: `${process.env.PUBLIC_URL}/assets/icons/eth-icon-dark-01.svg`,
	EUR_ICON: `${process.env.PUBLIC_URL}/assets/icons/eur-icon.svg`,
	LIFESAVER: `${process.env.PUBLIC_URL}/assets/acounts/account-icons-05.svg`,
	CONTACT_US_ICON: `${
		process.env.PUBLIC_URL
	}/assets/acounts/help-contact-us-01.svg`,
	QUESTION_MARK: `${
		process.env.PUBLIC_URL
	}/assets/icons/question-mark-black.svg`,
	QUESTION_MARK_COLOR: `${
		process.env.PUBLIC_URL
	}/assets/icons/question-mark-color.svg`,
	LAPTOP: `${process.env.PUBLIC_URL}/assets/icons/compute-play-black.svg`,
	LAPTOP_COLOR: `${
		process.env.PUBLIC_URL
	}/assets/icons/compute-play-color.svg`,
	TELEGRAM: `${process.env.PUBLIC_URL}/assets/icons/telegram-black.svg`,
	TELEGRAM_COLOR: `${process.env.PUBLIC_URL}/assets/icons/telegram-color.svg`,
	BCH_ICON: `${process.env.PUBLIC_URL}/assets/icons/bch-icon.svg`,
	BCH_ICON_DARK: `${process.env.PUBLIC_URL}/assets/icons/bch-icon.svg`,
	BCH_NAV_ICON: `${process.env.PUBLIC_URL}/assets/icons/bch-icon-nav.svg`,
	XRP_ICON: `${process.env.PUBLIC_URL}/assets/icons/xrp-icon-01.svg`,
	XRP_ICON_DARK: `${process.env.PUBLIC_URL}/assets/icons/xrp-icon-01.svg`,
	XRP_NAV_ICON: `${process.env.PUBLIC_URL}/assets/icons/xrp-icon-01.svg`,
	CHECK: `${process.env.PUBLIC_URL}/assets/images/Orderbook scrolling-01.svg`,
	DARK_CHECK: `${
		process.env.PUBLIC_URL
	}/assets/images/dark-Orderbook-scrolling-01.svg`,
	BLUE_QUESTION: `${
		process.env.PUBLIC_URL
	}/assets/acounts/account-icons-08.svg`,
	RED_WARNING: `${process.env.PUBLIC_URL}/assets/acounts/account-icons-09.svg`,
	GENDER_F: `${process.env.PUBLIC_URL}/assets/acounts/account-icons-10.svg`,
	GENDER_M: `${process.env.PUBLIC_URL}/assets/acounts/account-icons-11.svg`,
	GENDER_FEMALE: `${
		process.env.PUBLIC_URL
	}/assets/acounts/account-icons-26.svg`,
	GENDER_MALE: `${process.env.PUBLIC_URL}/assets/acounts/account-icons-27.svg`,
	BITCOIN_CLEAR: `${
		process.env.PUBLIC_URL
	}/assets/acounts/account-icons-13.svg`,
	RED_ARROW: `${process.env.PUBLIC_URL}/assets/acounts/account-icons-16.svg`,
	BLUE_CLIP: `${process.env.PUBLIC_URL}/assets/acounts/account-icons-17.svg`,
	BLACK_CHECK: `${process.env.PUBLIC_URL}/assets/acounts/account-icons-19.svg`,
	KEYS: `${process.env.PUBLIC_URL}/assets/acounts/account-icons-22.svg`,
	OTP_KEYS: `${process.env.PUBLIC_URL}/assets/acounts/account-icons-29.svg`,
	GREEN_CHECK: `${process.env.PUBLIC_URL}/assets/acounts/account-icons-23.svg`,
	LETTER: `${process.env.PUBLIC_URL}/assets/acounts/account-icons-24.svg`,
	SQUARE_DOTS: `${process.env.PUBLIC_URL}/assets/acounts/account-icons-25.svg`,
	OTP_CODE: `${process.env.PUBLIC_URL}/assets/acounts/account-icons-28.svg`,
	COPY_NEW: `${process.env.PUBLIC_URL}/assets/images/copy.svg`,
	COPY_NOTIFICATION: `${
		process.env.PUBLIC_URL
	}/assets/images/copy-icon-snack-notification.svg`,
	ACCOUNT_LINE: `${process.env.PUBLIC_URL}/assets/images/account.svg`,
	ACCOUNT_RECOVERY: `${
		process.env.PUBLIC_URL
	}/assets/images/account-recovery.svg`,
	BITCOIN_WALLET: `${process.env.PUBLIC_URL}/assets/images/bitcoin-wallet.svg`,
	CHECK_SENDING_BITCOIN: `${
		process.env.PUBLIC_URL
	}/assets/images/check-sending-bitcoin.svg`,
	DATA: `${process.env.PUBLIC_URL}/assets/images/data.svg`,
	DEPOSIT_BITCOIN: `${
		process.env.PUBLIC_URL
	}/assets/images/deposit-bitcoin-dark-theme.svg`,
	DEPOSIT_HISTORY: `${
		process.env.PUBLIC_URL
	}/assets/images/deposit-history.svg`,
	DEPOSIT_HISTORY_GREY: `${
		process.env.PUBLIC_URL
	}/assets/images/deposit-history-grey.svg`,
	DEPOSIT_RECEIVED_BITCOIN: `${
		process.env.PUBLIC_URL
	}/assets/images/deposit-received-bitcoin.svg`,
	DEPOSIT_SUCCESS: `${process.env.PUBLIC_URL}/assets/images/D-W-Success.svg`,
	WITHDRAWAL_SUCCESS: `${
		process.env.PUBLIC_URL
	}/assets/images/D-W-Success.svg`,
	EMAIL: `${process.env.PUBLIC_URL}/assets/images/email.svg`,
	EMAIL_SENT: `${process.env.PUBLIC_URL}/assets/images/email-sent.svg`,
	OTP_DOTS: `${process.env.PUBLIC_URL}/assets/images/f2fa-pin.svg`,
	DEPOSIT_BASE: `${process.env.PUBLIC_URL}/assets/images/fiat-deposit.svg`,
	DEPOSIT_BASE_COIN_COMPLETE: `${
		process.env.PUBLIC_URL
	}/assets/images/fiat-deposit-completed.svg`,
	BASE_WALLET: `${process.env.PUBLIC_URL}/assets/images/fiat-wallet.svg`,
	GEAR_BLACK: `${process.env.PUBLIC_URL}/assets/images/gear.svg`,
	GEAR_GREY: `${process.env.PUBLIC_URL}/assets/images/gear-grey.svg`,
	HELP_ICON: `${process.env.PUBLIC_URL}/assets/images/help.svg`,
	ID_BLACK: `${process.env.PUBLIC_URL}/assets/images/id.svg`,
	ID_GREY: `${process.env.PUBLIC_URL}/assets/images/id-grey.svg`,
	INCOMING_BITCOIN: `${
		process.env.PUBLIC_URL
	}/assets/images/Incoming-bitcoin.svg`,
	INCOMING_BTC: `${process.env.PUBLIC_URL}/assets/images/incoming-btc.svg`,
	INCOMING_TOMAN: `${process.env.PUBLIC_URL}/assets/images/incoming-toman.svg`,
	LICENSE: `${process.env.PUBLIC_URL}/assets/images/licence.svg`,
	LIQUID: `${process.env.PUBLIC_URL}/assets/images/liquid.svg`,
	MARGIN: `${process.env.PUBLIC_URL}/assets/images/margin.svg`,
	PASSWORD_RESET: `${process.env.PUBLIC_URL}/assets/images/password-reset.svg`,
	PAYMENT_OPTIONS: `${
		process.env.PUBLIC_URL
	}/assets/images/payment-options.svg`,
	QUICK_TRADE: `${process.env.PUBLIC_URL}/assets/images/quick-trade.svg`,
	QUICK_TRADE_TAB: `${
		process.env.PUBLIC_URL
	}/assets/images/quick-trade-tab.svg`,
	QUICK_TRADE_TAB_ACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/quick-trade-tab-active.svg`,
	SECURE: `${process.env.PUBLIC_URL}/assets/images/secure.svg`,
	SECURITY_BLACK: `${process.env.PUBLIC_URL}/assets/images/security.svg`,
	SECURITY_GREY: `${process.env.PUBLIC_URL}/assets/images/security-grey.svg`,
	SET_NEW_PASSWORD: `${
		process.env.PUBLIC_URL
	}/assets/images/set-new-password.svg`,
	SUCCESS_BLACK: `${process.env.PUBLIC_URL}/assets/images/success-black.svg`,
	TRADE_HISTORY: `${process.env.PUBLIC_URL}/assets/images/trade-history.svg`,
	TRADE_HISTORY_GREY: `${
		process.env.PUBLIC_URL
	}/assets/images/trade-history-grey.svg`,
	TRADES_ICON: `${process.env.PUBLIC_URL}/assets/images/trade-history.svg`,
	TRADE_SUCCESS: `${process.env.PUBLIC_URL}/assets/images/trade-success.svg`,
	TRANSACTION_HISTORY: `${
		process.env.PUBLIC_URL
	}/assets/images/transaction-history.svg`,
	UPDATE_QUICK_TRADE: `${
		process.env.PUBLIC_URL
	}/assets/images/update-quick-trade.svg`,
	VERIFICATION_SENT: `${
		process.env.PUBLIC_URL
	}/assets/images/resend-email-light.svg`,
	VERIFICATION_SENT_DARK: `${
		process.env.PUBLIC_URL
	}/assets/images/resend-email.svg`,
	WITHDRAW: `${process.env.PUBLIC_URL}/assets/images/withdraw.svg`,
	WITHDRAW_HISTORY: `${
		process.env.PUBLIC_URL
	}/assets/images/withdraw-history.svg`,
	WITHDRAW_HISTORY_GREY: `${
		process.env.PUBLIC_URL
	}/assets/images/withdraw-history-grey.svg`,
	BLUE_ARROW_LEFT: `${
		process.env.PUBLIC_URL
	}/assets/images/blue-arrow-left.svg`,
	BLUE_ARROW_RIGHT: `${
		process.env.PUBLIC_URL
	}/assets/images/blue-arrow-right.svg`,
	SESSION_TIMED_OUT: `${
		process.env.PUBLIC_URL
	}/assets/images/session-timed-out.svg`,
	BLUE_EDIT: `${process.env.PUBLIC_URL}/assets/images/blue-edit-exir-icon.svg`,
	BLUE_PLUS: `${process.env.PUBLIC_URL}/assets/images/max-plus-blue-icon.svg`,
	BLUE_TIMER: `${process.env.PUBLIC_URL}/assets/images/timer-icon.svg`,
	DROPDOWN_ARROW: `${
		process.env.PUBLIC_URL
	}/assets/images/down-arrow-home.svg`,
	NOTIFICATION_ORDER_LIMIT_BUY_FILLED: `${
		process.env.PUBLIC_URL
	}/assets/images/limit-buy-order-filled-01.svg`,
	NOTIFICATION_ORDER_LIMIT_BUY_CREATED: `${
		process.env.PUBLIC_URL
	}/assets/images/limit-buy-order-icon-01.svg`,
	NOTIFICATION_ORDER_LIMIT_BUY_FILLED_PART: `${
		process.env.PUBLIC_URL
	}/assets/images/limit-buy-order-part-filled-01.svg`,
	NOTIFICATION_ORDER_LIMIT_SELL_FILLED: `${
		process.env.PUBLIC_URL
	}/assets/images/limit-sell-order-filled-01.svg`,
	NOTIFICATION_ORDER_LIMIT_SELL_CREATED: `${
		process.env.PUBLIC_URL
	}/assets/images/limit-sell-order-icon-01.svg`,
	NOTIFICATION_ORDER_LIMIT_SELL_FILLED_PART: `${
		process.env.PUBLIC_URL
	}/assets/images/limit-sell-order-part-filled-01.svg`,
	NOTIFICATION_ORDER_MARKET_BUY_FILLED: `${
		process.env.PUBLIC_URL
	}/assets/images/market-buy-01.svg`,
	NOTIFICATION_ORDER_MARKET_SELL_FILLED: `${
		process.env.PUBLIC_URL
	}/assets/images/market-sell-01.svg`,
	NOTIFICATION_VERIFICATION_WARNING: `${
		process.env.PUBLIC_URL
	}/assets/images/verification.svg`,
	LOGOUT_ARROW: `${
		process.env.PUBLIC_URL
	}/assets/images/logout-arrow-active.svg`,
	LOGOUT_ARROW_GREY: `${
		process.env.PUBLIC_URL
	}/assets/images/logout-arrow.svg`,
	VERIFICATION_WARNING: `${process.env.PUBLIC_URL}/assets/images/astrics.svg`,
	VERIFICATION_SUCCESS: `${
		process.env.PUBLIC_URL
	}/assets/images/success-check-box.svg`,
	VERIFICATION_DOC: `${process.env.PUBLIC_URL}/assets/images/doc.svg`,
	VERIFICATION_DOC_INACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/doc-inactive.svg`,
	VERIFICATION_EMAIL: `${process.env.PUBLIC_URL}/assets/images/email_2.svg`,
	VERIFICATION_EMAIL_INACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/email-inactive.svg`,
	VERIFICATION_MOBILE: `${process.env.PUBLIC_URL}/assets/images/mobile.svg`,
	VERIFICATION_MOBILE_INACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/mobile-inactive.svg`,
	VERIFICATION_BANK: `${process.env.PUBLIC_URL}/assets/images/bank.svg`,
	VERIFICATION_BANK_INACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/bank-inactive.svg`,
	VERIFICATION_ID: `${process.env.PUBLIC_URL}/assets/images/id_2.svg`,
	VERIFICATION_ID_INACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/id_2-inactive.svg`,
	COIN_WITHDRAW_BTC: `${
		process.env.PUBLIC_URL
	}/assets/images/coin-withdraw-btc.svg`,
	COIN_WITHDRAW_TOMAN: `${
		process.env.PUBLIC_URL
	}/assets/images/coin-withdraw-tom.svg`,
	LOGOUT_DOOR_ACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/logout-door-active.svg`,
	LOGOUT_DOOR_INACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/logout-door-inactive.svg`,
	CANCEL_CROSS_ACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/cancel-cross-active.svg`,
	CANCEL_CROSS_INACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/cancel-cross-inactive.svg`,
	SIDEBAR_WALLET_ACTIVE_1: `${
		process.env.PUBLIC_URL
	}/assets/images/wallet-active.svg`,
	SIDEBAR_WALLET_INACTIVE_1: `${
		process.env.PUBLIC_URL
	}/assets/images/wallet-inactive.svg`,
	SIDEBAR_WALLET_ACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/wallet-selected.svg`,
	SIDEBAR_WALLET_INACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/wallet.svg`,
	SIDEBAR_ACCOUNT_ACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/account_2-active.svg`,
	SIDEBAR_ACCOUNT_INACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/account_2-inactive.svg`,
	SIDEBAR_TRADING_ACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/trade-active.svg`,
	SIDEBAR_TRADING_INACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/trade-inactive.svg`,
	SIDEBAR_QUICK_TRADING_ACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/quick-trade-tab-selected-01.svg`,
	SIDEBAR_QUICK_TRADING_INACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/quick-trade-tab-01-01.svg`,
	ARROW_TRANSFER_HISTORY_ACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/arrow-trans-history-active.svg`,
	ARROW_TRANSFER_HISTORY_INACTIVE: `${
		process.env.PUBLIC_URL
	}/assets/images/arrow-trans-history.svg`,
	ARROW_DOWN: `${process.env.PUBLIC_URL}/assets/images/arrow-down.svg`,
	TOKENS_INACTIVE: `${process.env.PUBLIC_URL}/assets/images/dev-icon.svg`,
	TOKENS_ACTIVE: `${process.env.PUBLIC_URL}/assets/images/dev-icon.svg`,
	TOKEN_REVOKED: `${process.env.PUBLIC_URL}/assets/images/api-key-revoked.svg`,
	TOKEN_ACTIVE: `${process.env.PUBLIC_URL}/assets/images/api-key-active.svg`,
	TOKEN_TRASHED: `${process.env.PUBLIC_URL}/assets/images/api-key-trashed.svg`,
	TOKEN_GENERATE: `${
		process.env.PUBLIC_URL
	}/assets/images/api-key-generate.svg`,
	TOKEN_GENERATE_DARK: `${
		process.env.PUBLIC_URL
	}/assets/images/api-key-generate-dark.svg`,
	TOKEN_CREATED: `${process.env.PUBLIC_URL}/assets/images/api-key-created.svg`,
	TOKEN_CREATED_DARK: `${
		process.env.PUBLIC_URL
	}/assets/images/api-key-created-dark.svg`,
	CHECK_ORDER: `${
		process.env.PUBLIC_URL
	}/assets/images/check-order-popup-01.svg`,
	ITEM_OPTIONS: `${process.env.PUBLIC_URL}/assets/images/item-options.svg`,
	DOTTED_GRIP: `${
		process.env.PUBLIC_URL
	}/assets/images/dotted-grip-chat-repeat-pattern.svg`,
	CHAT: `${process.env.PUBLIC_URL}/assets/images/chat-icon.svg`,
	WITHDRAW_MAIL_CONFIRMATION: `${
		process.env.PUBLIC_URL
	}/assets/images/withdraw-mail-confirmation.svg`,
	CLOSE_CROSS: `${process.env.PUBLIC_URL}/assets/images/close-cross-tab.svg`,
	TAB_PLUS: `${process.env.PUBLIC_URL}/assets/images/tab-plus.svg`,
	TAB_MINUS: `${process.env.PUBLIC_URL}/assets/images/tab-minus.svg`,
	TAB_SUMMARY: `${process.env.PUBLIC_URL}/assets/images/tab-summary.svg`,
	TAB_WALLET: `${process.env.PUBLIC_URL}/assets/images/tab-wallet.svg`,
	TAB_SECURITY: `${process.env.PUBLIC_URL}/assets/images/tab-security.svg`,
	TAB_VERIFY: `${process.env.PUBLIC_URL}/assets/images/tab-verify.svg`,
	TAB_SETTING: `${process.env.PUBLIC_URL}/assets/images/tab-setting.svg`,
	TAB_API: `${process.env.PUBLIC_URL}/assets/images/tab-api.svg`,
	TRADE_FILLED_SUCESSFUL: `${
		process.env.PUBLIC_URL
	}/assets/images/Orderbook scrolling-01.svg`,
	TRADE_PARTIALLY_FILLED: `${
		process.env.PUBLIC_URL
	}/assets/images/part-fill.svg`,
	TAB_SIGNOUT: `${process.env.PUBLIC_URL}/assets/images/signout.svg`,
	DOUBLE_ARROW: `${process.env.PUBLIC_URL}/assets/images/double-arrow.svg`,
	SEARCH: `${process.env.PUBLIC_URL}/assets/images/search.svg`,
	VERIFICATION_DOC_STATUS: `${
		process.env.PUBLIC_URL
	}/assets/images/verification-doc-status.svg`,
	VERIFICATION_PENDING: `${
		process.env.PUBLIC_URL
	}/assets/images/verification-pending-orange.svg`,
	VERIFICATION_REJECTED: `${
		process.env.PUBLIC_URL
	}/assets/images/verification-rejected-yellow-cross.svg`,
	VERIFICATION_INCOMPLETE: `${
		process.env.PUBLIC_URL
	}/assets/images/verification-attention-red.svg`,
	VERIFICATION_VERIFIED: `${
		process.env.PUBLIC_URL
	}/assets/images/verification-green-tick.svg`,
	VERIFICATION_EMAIL_NEW: `${
		process.env.PUBLIC_URL
	}/assets/images/verification-email.svg`,
	VERIFICATION_PHONE_NEW: `${
		process.env.PUBLIC_URL
	}/assets/images/verification-phone.svg`,
	VERIFICATION_ID_NEW: `${
		process.env.PUBLIC_URL
	}/assets/images/verification-id.svg`,
	VERIFICATION_BANK_NEW: `${
		process.env.PUBLIC_URL
	}/assets/images/verification-bank.svg`,
	VERIFICATION_DOCUMENT_NEW: `${
		process.env.PUBLIC_URL
	}/assets/images/verification-document.svg`,
	PENDING_TIMER: `${process.env.PUBLIC_URL}/assets/images/pending-timer.svg`,
	VOLUME_PENDING: `${
		process.env.PUBLIC_URL
	}/assets/images/volume-pending-icon.svg`,
	VOLUME_PENDING_DARK: `${
		process.env.PUBLIC_URL
	}/assets/images/volume-pending-dark.svg`,
	SELF_KYC_ID_FA: `${
		process.env.PUBLIC_URL
	}/assets/self-kyc-id-note-persian.png`,
	SELF_KYC_ID_EN: `${
		process.env.PUBLIC_URL
	}/assets/self-kyc-id-note-english.png`,
	CHAT_ICON_LVL_3: `${
		process.env.PUBLIC_URL
	}/assets/images/kraken-chat-lvl-3.svg`,
	CHAT_ICON_LVL_4: `${
		process.env.PUBLIC_URL
	}/assets/images/whale-chat-lvl-4.svg`,
	CHAT_ICON_SPECIAL: `${
		process.env.PUBLIC_URL
	}/assets/images/fin-chat-special.svg`,
	NOTE_KYC: `${process.env.PUBLIC_URL}/assets/images/note-KYC.svg`,
	SIDEBAR_CHAT: `${process.env.PUBLIC_URL}/assets/images/bottom-chat-icon.svg`,
	SIDEBAR_HELP: `${
		process.env.PUBLIC_URL
	}/assets/images/help-question-mark-icon.svg`,
	CONNECT_LOADING: `${
		process.env.PUBLIC_URL
	}/assets/images/connect-loading.svg`,
	KRAKEN: `${
		process.env.PUBLIC_URL
	}/assets/images/cunning-blue-kraken-trader.svg`,
	SNAPPER: `${
		process.env.PUBLIC_URL
	}/assets/images/little-red-snapper-trader.svg`,
	SHRIMP: `${
		process.env.PUBLIC_URL
	}/assets/images/tiny-pink-shrimp-trader.svg`,
	LEVIATHAN: `${
		process.env.PUBLIC_URL
	}/assets/images/black-leviathan-trader.svg`,
	SETTING_NOTIFICATION_ICON: `${
		process.env.PUBLIC_URL
	}/assets/images/notification-settings-icon.svg`,
	SETTING_INTERFACE_ICON: `${
		process.env.PUBLIC_URL
	}/assets/images/interface-settings-icon.svg`,
	SETTING_LANGUAGE_ICON: `${
		process.env.PUBLIC_URL
	}/assets/images/language-settings-icon.svg`,
	SETTING_CHAT_ICON: `${
		process.env.PUBLIC_URL
	}/assets/images/chat-settings-icon.svg`,
	SETTING_AUDIO_ICON: `${
		process.env.PUBLIC_URL
	}/assets/images/audio-settings-icon.svg`,
	SETTING_RISK_ICON: `${
		process.env.PUBLIC_URL
	}/assets/images/risk-settings-icon.svg`,
	SETTING_RISK_ADJUST_ICON: `${
		process.env.PUBLIC_URL
	}/assets/images/risk-management-pop-adjust.svg`,
	SETTING_RISK_MANAGE_WARNING_ICON: `${
		process.env.PUBLIC_URL
	}/assets/images/risk-manage-pop-warning.svg`,
	REFER_ICON: `${process.env.PUBLIC_URL}/assets/images/refer-icon.svg`
};

export const SOCIAL_ICONS = {
	FACEBOOK: `${process.env.PUBLIC_URL}/assets/icons/social-grey-icons.svg`,
	TWIITER: `${process.env.PUBLIC_URL}/assets/icons/social-grey-icons02.svg`,
	INSTAGRAM: `${process.env.PUBLIC_URL}/assets/icons/social-grey-icons03.svg`,
	TELEGRAM: `${process.env.PUBLIC_URL}/assets/icons/social-grey-icons04.svg`,
	GOOGLE: `${process.env.PUBLIC_URL}/assets/icons/google.png`
};

export const FEATURES_ICONS = {
	PRO_TRADING: `${
		process.env.PUBLIC_URL
	}/assets/images/features-pro-trade-icons.svg`,
	PAYMENT: `${
		process.env.PUBLIC_URL
	}/assets/images/features-payment-card-icons.svg`,
	SECURITY: `${process.env.PUBLIC_URL}/assets/images/features-lock-icons.svg`,
	REPORTING: `${process.env.PUBLIC_URL}/assets/images/features-data-icons.svg`,
	SUPPORT: `${
		process.env.PUBLIC_URL
	}/assets/images/features-support-icons.svg`,
	LEGAL: `${process.env.PUBLIC_URL}/assets/images/features-legal-icons.svg`
};

export const SUMMMARY_ICON = {
	KRAKEN: `${process.env.PUBLIC_URL}/assets/summary/kraken.png`,
	SNAPPER: `${process.env.PUBLIC_URL}/assets/summary/snapper.png`,
	SHRIMP: `${process.env.PUBLIC_URL}/assets/summary/shrimp.png`,
	LEVIATHAN: `${process.env.PUBLIC_URL}/assets/summary/leviathan.png`,
	LEVIATHAN_DARK: `${process.env.PUBLIC_URL}/assets/summary/leviathan_dark.png`
};

export const HOLLAEX_LOGO = `${
	process.env.PUBLIC_URL
}/assets/hollaEx_logo-grey.svg`;
export const HOLLAEX_LOGO_BLACK = `${
	process.env.PUBLIC_URL
}/assets/hollaEx_logo-blk.svg`;

export const AUDIOS = {
	ORDERBOOK_FIELD_UPDATE: `${
		process.env.PUBLIC_URL
	}/assets/audio/orderbook_field_update.wav`,
	ORDERBOOK_LIMIT_ORDER: `${
		process.env.PUBLIC_URL
	}/assets/audio/orderbook-limit-order.wav`,
	PUBLIC_TRADE_NOTIFICATION: `${
		process.env.PUBLIC_URL
	}/assets/audio/public-trade-notification.wav`,
	ORDER_COMPLETED: `${process.env.PUBLIC_URL}/assets/audio/order-filled.wav`,
	ORDER_PARTIALLY_COMPLETED: `${
		process.env.PUBLIC_URL
	}/assets/audio/part-fill.wav`,
	CANCEL_ORDER: `${process.env.PUBLIC_URL}/assets/audio/cancel_order.wav`,
	QUICK_TRADE_COMPLETE: `${
		process.env.PUBLIC_URL
	}/assets/audio/quick-trade-complete.wav`,
	REVIEW_QUICK_TRADE_ORDER: `${
		process.env.PUBLIC_URL
	}/assets/audio/review-quick-trade-order.wav`,
	TIME_OUT_QUICK_TRADE: `${
		process.env.PUBLIC_URL
	}/assets/audio/time-out-quick-trade.wav`
};

export const CURRENCY_PRICE_FORMAT = '{0} {1}';
// this DEFAULT_COIN_PAIR to prevent from error while irrelevant BASE_CURRENCY
export const DEFAULT_COIN_DATA = {
	fullname: '',
	symbol: '',
	min: 0.001
};

export const DEFAULT_PAIR = 'btc-eur';

export const FLEX_CENTER_CLASSES = [
	'd-flex',
	'justify-content-center',
	'align-items-center'
];

export const TIMESTAMP_FORMAT = STRINGS.TIMESTAMP_FORMAT;
export const HOUR_FORMAT = STRINGS.HOUR_FORMAT;

export const DEPOSIT_LIMITS = {
	eur: {
		DAILY: 50000000,
		MIN: 100,
		MAX: 50000000
	}
};

export const WITHDRAW_LIMITS = {
	eur: {
		MIN: process.env.REACT_APP_WITHDRAWAL_EUR_MIN || 20000,
		STEP: process.env.REACT_APP_WITHDRAWAL_EUR_STEP || 1
	},
	btc: {
		MIN: process.env.REACT_APP_WITHDRAWAL_BTC_MIN || 0.0001,
		MAX: process.env.REACT_APP_WITHDRAWAL_BTC_MAX || 10,
		STEP: process.env.REACT_APP_WITHDRAWAL_BTC_STEP || 0.0001
	},
	eth: {
		MIN: process.env.REACT_APP_WITHDRAWAL_ETH_MIN || 0.001,
		MAX: process.env.REACT_APP_WITHDRAWAL_ETH_MAX || 10,
		STEP: process.env.REACT_APP_WITHDRAWAL_ETH_STEP || 0.001,
		MIN_FEE: parseFloat(process.env.REACT_APP_ETH_MIN_FEE || 0.001)
	},
	bch: {
		MIN: process.env.REACT_APP_WITHDRAWAL_BCH_MIN || 0.001,
		MAX: process.env.REACT_APP_WITHDRAWAL_BCH_MAX || 10,
		STEP: process.env.REACT_APP_WITHDRAWAL_BCH_STEP || 0.001
	},
	xrp: {
		MIN: process.env.REACT_APP_WITHDRAWAL_XRP_MIN || 0.1,
		MAX: process.env.REACT_APP_WITHDRAWAL_XRP_MAX || 100000,
		STEP: process.env.REACT_APP_WITHDRAWAL_XRP_STEP || 0.1
	}
};

// Default trading pairs (it gets set from the server so it is not important to set these properly)
export const DEFAULT_TRADING_PAIRS = ['hex-usdt'];

export const TOKEN_KEY = `${ENV}_${NETWORK}_TOKEN`;
export const LANGUAGE_KEY = `${ENV}_${NETWORK}_LANGUAGE`;
export const DEFAULT_LANGUAGE = process.env.REACT_APP_DEFAULT_LANGUAGE || 'en';

export const BANK_WITHDRAWAL_BASE_FEE =
	process.env.REACT_APP_BANK_WITHDRAWAL_BASE_FEE || 1;
export const BANK_WITHDRAWAL_DYNAMIC_FEE_RATE =
	process.env.REACT_APP_BANK_WITHDRAWAL_DYNAMIC_FEE_RATE || 0.5;
export const BANK_WITHDRAWAL_MAX_DYNAMIC_FEE =
	process.env.REACT_APP_BANK_WITHDRAWAL_MAX_DYNAMIC_FEE || 50;
export const BANK_WITHDRAWAL_MAX_AMOUNT_FOR_BASE_FEE =
	process.env.REACT_APP_BANK_WITHDRAWAL_MAX_AMOUNT_FOR_BASE_FEE || 0;
export const takerFee = 0;

export const BANK_PAYMENT_LINK = '';
export const MIN_VERIFICATION_LEVEL_TO_WITHDRAW = 2;
export const MAX_VERIFICATION_LEVEL_TO_WITHDRAW = 5;

export const BLOCKTRAIL_ENDPOINT = `https://www.blocktrail.com/${
	NETWORK === 'testnet' ? 't' : ''
}BTC/tx/`;

export const ETHEREUM_ENDPOINT = `https://${
	NETWORK === 'testnet' ? 'ropsten.etherscan.io' : 'etherscan.io'
}/tx/`;

export const BITCOINCOM_ENDPOINT =
	NETWORK === 'testnet'
		? `https://www.blocktrail.com/tBCC/tx/`
		: 'https://explorer.bitcoin.com/bch/tx/';

export const BALANCE_ERROR = 'Insufficient balance to perform the order';

export const CAPTCHA_SITEKEY = process.env.REACT_APP_CAPTCHA_SITE_KEY
	|| '6LeuOKoUAAAAAGVoZcSWXJH60GHt4crvIaNXn1YA'; // default recaptcha v3
export const CAPTCHA_TIMEOUT = process.env.REACT_APP_CAPTCHA_TIMEOUT
	? parseInt(process.env.REACT_APP_CAPTCHA_TIMEOUT, 10)
	: 2000;

export const TIME_ZONE = process.env.REACT_APP_TIMEZONE || 'GMT';
export const TOKEN_EMAIL = 'token::email';
export const TOKEN_MAX_AGE = 23 * 60 * 60;

export const IS_PRO_VERSION =
	process.env.REACT_APP_IS_PRO_VERSION &&
	process.env.REACT_APP_IS_PRO_VERSION === 'true';
export const PRO_VERSION_REDIRECT =
	process.env.REACT_APP_PRO_VERSION_REDIRECT || '/account';
export const DEFAULT_VERSION_REDIRECT = '/';
export const PRO_URL = process.env.REACT_APP_PRO_URL || 'https://hollaex.com';

// minimum level for a user to be able to create api tokens
export const MIN_LEVEL_FOR_TOKENS = 2;

const THEME_COLOR = localStorage.getItem('theme');
export const THEMES = ['dark', 'white'];
export const THEME_DEFAULT = THEME_COLOR ? THEME_COLOR : THEMES[1];
export const CHAT_STATUS_KEY = 'chat:minimized';

/* these values are used for the chart limits on the summary page */
export const TRADING_VOLUME_CHART_LIMITS = [10000, 100000];
export const TRADE_ACCOUNT_UPGRADE_MONTH = [3, 6];
/*****************************************************************/

export const BAR_CHART_LIMIT_CAPACITY = [340000, 2050000];

export const DEFAULT_COUNTRY = process.env.REACT_APP_DEFAULT_COUNTRY
	? process.env.REACT_APP_DEFAULT_COUNTRY.toUpperCase()
	: 'KR';

export const BASE_CURRENCY = process.env.REACT_APP_BASE_CURRENCY
	? process.env.REACT_APP_BASE_CURRENCY.toLowerCase()
	: 'usdt';

export const FEES_LIMIT_SITE_URL = 'https://www.hollaex.com';

export const TRADING_ACCOUNT_TYPE = {
	shrimp: {
		symbol: 'shrimp',
		name: STRINGS.SUMMARY.TINY_PINK_SHRIMP_TRADER,
		fullName: STRINGS.SUMMARY.TINY_PINK_SHRIMP_TRADER_ACCOUNT,
		level: 1
	},
	snapper: {
		symbol: 'snapper',
		name: STRINGS.SUMMARY.LITTLE_RED_SNAPPER_TRADER,
		fullName: STRINGS.SUMMARY.LITTLE_RED_SNAPPER_TRADER_ACCOUNT,
		level: 2
	},
	kraken: {
		symbol: 'kraken',
		name: STRINGS.SUMMARY.CUNNING_BLUE_KRAKEN_TRADING,
		fullName: STRINGS.SUMMARY.CUNNING_BLUE_KRAKEN_TRADING_ACCOUNT,
		level: 3
	},
	leviathan: {
		symbol: 'leviathan',
		name: STRINGS.SUMMARY.BLACK_LEVIATHAN_TRADING,
		fullName: STRINGS.SUMMARY.BLACK_LEVIATHAN_TRADING_ACCOUNT,
		level: 4
	}
};

export const MAX_NUMBER_BANKS = 3;

export const CHART_MONTHS = [
	{ key: 1, value: 'Jan' },
	{ key: 2, value: 'Feb' },
	{ key: 3, value: 'Mar' },
	{ key: 4, value: 'Apr' },
	{ key: 5, value: 'May' },
	{ key: 6, value: 'Jun' },
	{ key: 7, value: 'Jul' },
	{ key: 8, value: 'Aug' },
	{ key: 9, value: 'Sep' },
	{ key: 10, value: 'Oct' },
	{ key: 11, value: 'Nov' },
	{ key: 12, value: 'Dec' }
];

export const DARK_THEME_COLORS = {
	dark_border_main: '#b7b5cd',
	dark_sub_text: '#a3a1ca',
	dark_sub_text_1: '#808184'
};

export const DARK_THEME_CHART_COLORS = {
	SELL: '#f69321',
	BUY: '#29abe2',
	LINE: '#b7b7ce',
	FILL: 'orange',
	AXIS: '#b7b7ce',
	BUY_CANDLE: '#29abe2',
	SELL_CANDLE: '#f69321',
	BUY_VOLUME: '#29abe2',
	SELL_VOLUME: '#f69321'
};