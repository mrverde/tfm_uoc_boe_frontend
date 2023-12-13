const getResumesData = element => {
  let output;
  try {
    output = JSON.parse(localStorage.getItem(element));
  } catch (e) {
    output = localStorage.getItem(element);
  }
  return output ?? {};
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
  if (["BOE-A-2999-99999"].includes(boe)) {
    return true;
  }
  return boe in getResumesData(element);
};

export {
  getResumesData,
  saveResumesData,
  deleteResumesData,
  checkResumeExists
};
