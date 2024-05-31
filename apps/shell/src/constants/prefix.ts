export enum MicroApp {
  posting = "posting",
  network = "network",
  edu = "edu",
  job = "job",
}

export const appPostingBaseName = `/${MicroApp.posting}`;
export const appNetworkBaseName = `/${MicroApp.network}`;
export const appEduBaseName = `/${MicroApp.edu}`;
export const appJobBaseName = `/${MicroApp.job}`;

export const microAppRoute: {
  [appName in MicroApp]: `/${appName}`;
} = {
  [MicroApp.edu]: `/${MicroApp.edu}`,
  [MicroApp.posting]: `/${MicroApp.posting}`,
  [MicroApp.network]: `/${MicroApp.network}`,
  [MicroApp.job]: `/${MicroApp.job}`,
};
