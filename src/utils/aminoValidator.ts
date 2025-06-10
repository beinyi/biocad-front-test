const validAminoAcids = "ARNDCEQGHILKMFPSTWYV-";

export const allowedChars = new RegExp(`^[${validAminoAcids}]+$`, "i");

export const removeInvalidChars = new RegExp(`[^${validAminoAcids}]`, "gi");

export const filterAminoInput = (value: string) =>
  value.toUpperCase().replace(removeInvalidChars, "");
