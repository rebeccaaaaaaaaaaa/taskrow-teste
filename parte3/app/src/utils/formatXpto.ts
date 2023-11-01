export const formatXpto = (value: string) => {
    const cleanedValue = value.replace(/[^0-9]/g, "");
    if (cleanedValue.length <= 4) {
      return cleanedValue;
    }
    return `${cleanedValue.slice(0, 4)}-${cleanedValue.charAt(4)}`;
  };