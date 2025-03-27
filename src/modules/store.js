const storeDiary = (formData) => {
  const retrieveDiary = JSON.parse(localStorage.getItem("diaryItems")) || [];
  const checkDate = formData.date;
  let checkFlag = false;
  retrieveDiary.forEach((item) => {
    if (item.date === checkDate) checkFlag = true; //checking if post with such date already axists
  });
  if (!checkFlag) {
    const updatedDiary = [...retrieveDiary, formData];
    localStorage.setItem("diaryItems", JSON.stringify(updatedDiary));
    return "";
  } else {
    return `Post with such date ${checkDate} already exists`; //warning popup message
  }
};
export { storeDiary };
