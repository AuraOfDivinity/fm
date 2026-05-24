const imageModules = import.meta.glob("../assets/images/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const resolveImageUrl = (imagePath: string) => {
  const fileName = imagePath.split("/").pop();

  if (!fileName) {
    return "";
  }

  return imageModules[`../assets/images/${fileName}`] ?? "";
};
