const seg = () =>
  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

export default () =>
  `${seg()}${seg()}-${seg()}-${seg()}-${seg()}-${seg()}${seg()}${seg()}`;
