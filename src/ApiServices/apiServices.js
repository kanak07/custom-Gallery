import axios from "axios";

export async function getAllRecords(requestUrl) {
   try {
      const data = await axios.get(requestUrl);
      return data.data.products;
   }
   catch (err) {
      console.log(err);
   }
}

export async function getData(requestUrl) {
   try {
      const data = await axios.get(requestUrl);
      return data.data;
   }
   catch (err) {
      console.log(err);
   }
}

export async function addData(requestUrl, newData) {
   try {
      const response = await axios.post(requestUrl, newData);
      return response;
   }
   catch (err) {
      console.log(err);
   }
}

export async function updateRecord(requestUrl, updateData) {
   try {
      const response = fetch(requestUrl, {
         method: 'PUT', /* or PATCH */
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ ...updateData })
      });
      return response;
   }
   catch (err) {
      console.log(err);
   }
}

export async function deleteRecord(requestUrl) {
   try {
      const data = await axios.delete(requestUrl);
      return data;
   }
   catch (err) {
      console.log(err);
   }
}