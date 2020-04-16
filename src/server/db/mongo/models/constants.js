import config from '../../../server.config'
export const MODEL_USER_PRIVATE = 'userprivate_' + (process.env.APP_NANE || config.network)
export const MODEL_WALLET_NONCE = 'walletnonce'
