export const ConnectMetamask = async () => {
  if (window.ethereum) {
    await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((res) => {
        return res[0];
      });
  } else {
    return '';
  }
}