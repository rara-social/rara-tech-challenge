import axios from "axios";

const getProfileById = (id) => {
  try {
    const data = await axios({
      url: "/api/profile",
      method: "GET",
      data: { id },
    }).then((res) => {
      return res.data;
    });
    return { error: null, data };
  } catch (err) {
    return { error: err, data: null };
  }
  // return axios.get(`/api/profile`, { params: { id } });
};

const updateProfileById = (id, changes) => {
  try {
    const data = await axios({
      url: `/api/profile/${id}`,
      method: "patch",
      data: { changes },
    }).then((res) => {
      return res.data;
    });
    return { error: null, data };
  } catch (err) {
    return { error: err, data: null };
  }
};

export default { getProfileById, updateProfileById };
