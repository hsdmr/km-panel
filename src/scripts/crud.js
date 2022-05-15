
import { checkAuth } from "src/scripts/auth.js";
import { getSessionItem } from "src/scripts/session.js";
import { tranlate } from "src/scripts/i18n.js";

export const search = async (apiUrl, success = "") => {
  await checkAuth();
  const auth = getSessionItem("auth");

  const res = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: auth.access_token,
    },
  });

  const response = await res.json();
  const total = res.headers.get("Total-Row");

  if (res.ok) {
    if (success != "") {
      toastr.success(success);
    }
  } else {
    toastr.error(tranlate('error.' + response.key));
  }

  return {
    data: response,
    total: total
  };
};

export const create = async (apiUrl,  success = "", body) => {
  await checkAuth();
  const auth = getSessionItem("auth");

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: auth.access_token,
    },
    body: JSON.stringify(body),
  });

  const response = await res.json();

  if (res.ok) {
    if (success != "") {
      toastr.success(success);
    }
  } else {
    toastr.error(tranlate('error.' + response.key));
  }

  return response;
};

export const read = async (apiUrl, id, success = "") => {
  await checkAuth();
  const auth = getSessionItem("auth");

  const res = await fetch(apiUrl + `/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: auth.access_token,
    },
  });
  
  const response = await res.json();

  if (res.ok) {
    if (success != "") {
      toastr.success(success);
    }
  } else {
    toastr.error(tranlate('error.' + response.key));
  }

  return response;
};

export const update = async (apiUrl, id,  success = "", body) => {
  await checkAuth();
  const auth = getSessionItem("auth");

  const res = await fetch(apiUrl + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: auth.access_token,
    },
    body: JSON.stringify(body),
  });

  const response = await res.json();

  if (res.ok) {
    if (success != "") {
      toastr.success(success);
    }
  } else {
    toastr.error(tranlate('error.' + response.key));
  }

  return response;
};

export const destroy = async (apiUrl, id, permanent, success = "") => {
  await checkAuth();
  const auth = getSessionItem("auth");
  const permanentDeleteUrl = permanent ? '/permanent' : '';

  const res = await fetch(apiUrl + `/${id}` + permanentDeleteUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: auth.access_token,
    },
  });
  
  
  if (res.ok) {
    if (success != "") {
      toastr.success(success);
      return true;
    }
  } else {
    const response = await res.json();
    toastr.error(tranlate('error.' + response.key));
    return false;
  }
};

export const restore = async (apiUrl, id,  success = "") => {
  await checkAuth();
  const auth = getSessionItem("auth");

  const res = await fetch(apiUrl + `/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: auth.access_token,
    },
  });
  
  
  if (res.ok) {
    if (success != "") {
      toastr.success(success);
      return true;
    }
  } else {
    const response = await res.json();
    toastr.error(tranlate('error.' + response.key));
    return false;
  }
};

export const get = async (apiUrl, success = "") => {
  await checkAuth();
  const auth = getSessionItem("auth");

  const res = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: auth.access_token,
    },
  });
  
  const response = await res.json();

  if (res.ok) {
    if (success != "") {
      toastr.success(success);
    }
  } else {
    toastr.error(tranlate('error.' + response.key));
  }

  return response;
};