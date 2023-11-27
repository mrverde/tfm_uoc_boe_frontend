const getResumesData = element => {
  try {
    return JSON.parse(localStorage.getItem(element));
  } catch (e) {
    return localStorage.getItem(element) ?? {};
  }
};

const saveResumesData = (value, element) => {
  if (typeof element === "object" && element !== null) {
    localStorage.setItem(value, JSON.stringify(element));
  } else {
    localStorage.setItem(value, element);
  }
};

const deleteResumesData = element => {
  localStorage.removeItem(element);
};

const checkResumeExists = (element, boe) => {
  if (typeof element === "object" && element !== null) {
    return boe in getResumesData(element);
  }
  return false;
};

export {
  getResumesData,
  saveResumesData,
  deleteResumesData,
  checkResumeExists
};
