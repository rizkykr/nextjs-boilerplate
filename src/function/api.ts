import axios, { AxiosRequestConfig } from "axios";

interface api {
  name?: string;
  url: string;
  data?: any;
  method?: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
  token?: string;
  type?: string;
  blobMode?: boolean;
  headers?: any;
}

export const APIHandler = async ({
  name,
  url,
  data,
  method = "GET",
  token = "",
  type = "json",
  blobMode = false,
  headers,
}: api) => {
  // const ftchConfig = {
  //   method: method,
  //   body: data,
  //   headers: {
  //     Accept: "application/json",
  //   },
  //   next: { tags: [name || url] },
  // };
  const urls = process.env.NEXT_PUBLIC_API_ENDPOINT + url;

  var config: AxiosRequestConfig = {
    withCredentials: true,
    method: method,
    maxBodyLength: Infinity,
    url: urls,
    data: data,
    headers: {
      ...{
        Accept: "application/json",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
      ...headers,
    },
  };

  if (blobMode) {
    config.responseType = "blob";
  }
  if (type == "json") {
    const apnd = {
      "Content-Type": "application/json",
    };
    config.headers = { ...config.headers, ...apnd };
  } else {
    const chk = data instanceof FormData;
    if (chk) {
      config.data = data;
    } else {
      var form_data = new FormData();
      for (var key in data) {
        form_data.append(key, data[key]);
      }
      config.data = form_data;
      console.log(form_data);
    }

    const apnd = {
      "Content-Type": "multipart/form-data",
    };
    config.headers = { ...config.headers, ...apnd };
  }
  if (token) {
    const apnd = {
      Authorization: `Bearer ${token}`,
    };
    config.headers = { ...config.headers, ...apnd };
  }
  if (blobMode) {
    config.responseType = "blob";
  }

  const bee = await axios
    .request(config)
    .then((response: any) => {
      return response.data;
    })
    .catch((e: any) => {
      return e.response.data;
    });
  return bee;
};
