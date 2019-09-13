import * as ethUtil from 'ethereumjs-util'

export const recoverPublickey = (signature, msg, nonce) => {
  const sig = ethUtil.fromRpcSig(signature)
  
  const messageHash = ethUtil.keccak(
    `\u0019Ethereum Signed Message:\n${(msg.length + nonce.length).toString()}${msg}${nonce}`
  )
  
  const publicKey = ethUtil.ecrecover(messageHash, sig.v, sig.r, sig.s)
  const recovered = ethUtil.bufferToHex(ethUtil.pubToAddress(publicKey))
  
  return recovered
}