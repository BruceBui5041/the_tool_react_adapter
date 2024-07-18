export const getClientTheme = async (projectName: string) => {
  try {
    const selectedProject = (await import(`../_projects/${projectName}`))
      .default;
    const { clientTheme } = selectedProject;
    if (!clientTheme) return null;
    return await clientTheme();
  } catch (error) {
    console.error("getClientTheme", error);
    return null;
  }
};
