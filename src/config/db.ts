const LOCAL_STORAGE_KEY = "products";

type ProductProps = {
  name: string;
  price: string;
};

interface ProductToDbProp extends ProductProps {
  id: number;
}

export const addData = async (data: ProductProps): Promise<void> => {
  try {
    const storageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    let items: ProductToDbProp[] = [];
    if (storageData) {
      items = JSON.parse(storageData);
    }
    const lastItem = items[items.length - 1];
    const newId = lastItem ? lastItem.id + 1 : 1;
    const newItem = { ...data, id: newId };
    items.push(newItem);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    window.location.reload();
    alert("Record Added");
  } catch (err) {
    console.error("Error adding data:");
    throw err;
  }
};

export const updateData = async ({
  id,
  data,
}: {
  id: number;
  data: ProductProps;
}): Promise<void> => {
  try {
    const storageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    let items: ProductToDbProp[] = [];
    if (storageData) {
      items = JSON.parse(storageData);
    }
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedItem = { ...data, id };
      items[index] = updatedItem;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));

      window.location.reload();
      alert("Record Updated");
    } else {
      throw new Error(`No data found with ID ${id}`);
    }
  } catch (err) {
    throw err;
  }
};

export const getAllData = async (): Promise<ProductProps[]> => {
  try {
    const storageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageData) {
      const items: ProductProps[] = JSON.parse(storageData);
      return items;
    } else {
      return [];
    }
  } catch (err) {
    console.error("Error getting all data");
    throw err;
  }
};

export const deleteData = async (id: number): Promise<void> => {
  try {
    const storageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageData) {
      const items: ProductToDbProp[] = JSON.parse(storageData);
      const index = items.findIndex((item) => item.id === id);
      if (index !== -1) {
        items.splice(index, 1);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
      }
      window.location.reload();
      alert("Record Deleted");
    }
  } catch (error) {
    console.error(error);
  }
};
