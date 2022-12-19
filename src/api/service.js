import endpoints from './endpoints';

export const get = endpoint => {
  return new Promise((resolve, reject) => {
    const method = 'GET';
    const headers = {...getHeaders(endpoint)};
    const t1 = new Date().getTime();

    console.log(`Request.${method} start : ` + endpoint.replace(''), headers);

    fetch(endpoint, {method, headers})
      .then(convertJson)
      .then(res => resolve(processResponse(endpoint, res, t1, method), headers))
      .catch(e => {
        console.log(`Request.${method} error : ` + endpoint.replace(''), e);
        reject(e);
      });
  });
};

const convertJson = async res => {
  const data = res.status === 200 ? await res.json() : null;
  return {data, status: res.status, success: res.status === 200};
};

const processResponse = (endpoint, res, t1, method) => {
  const t2 = new Date().getTime();
  const status = res.status;
  const success = res.success;
  const data = res
    ? res.data
      ? res.data.data
        ? res.data.data
        : res.data
      : null
    : null;

  console.log(
    `Request.${method} finish : ` + endpoint.replace(''),
    `[${status}]`,
    `${t2 - t1}ms`,
    // data,
  );
  return {status, success, data};
};

const getHeaders = endpoint => {
  switch (endpoint) {
    case endpoints.login:
      return {'Content-Type': 'application/json'};

    default:
      return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${global.token}`,
      };
  }
};
