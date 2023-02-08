export const redirectTo404 = () => {
  return {
    redirect: {
      permanent: false,
      destination: `/404`
    }
  }
}
