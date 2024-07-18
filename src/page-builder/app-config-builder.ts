export const getClientConfig = async (projectName: string) => {
  try {
    const selectedProject = (await import(`../_projects/${projectName}`))
      .default;
    const { clientConfig } = selectedProject;
    if (!clientConfig) return null;
    return await clientConfig();
  } catch (error) {
    console.log("getClientConfig", error);
    return null;
  }
};
