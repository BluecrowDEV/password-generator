class LocalStorageMenagement {
  public saveDataInLocalStorage<Type>(dataLabel: string, data: Type): void {
    const dataObj: Type = { ...data };

    localStorage.setItem(dataLabel, JSON.stringify(dataObj));

    alert('Data saved');
  }

  public getSavedDataInLocalStorage<Type>(dataLabel: string): Type | void {
    if (!localStorage.getItem(dataLabel)) {
      alert('Data could not be found');
      return;
    }

    const data: Type = JSON.parse(localStorage.getItem(dataLabel) as string);

    return data;
  }
}

export default new LocalStorageMenagement();
