import  secureLocalStorage  from  "react-secure-storage";
export const fetchImageWithToken = (imagePath) => {
    const API_IMG = "https://api.se-rmutl.net/api/images/";
    const bearerToken = secureLocalStorage.getItem('bearerToken');
  
    const headers = {
      Authorization: `Bearer ${bearerToken}`,
    };
  
    return fetch(`${API_IMG}${imagePath}`, {
      headers,
    }).then(response => response.blob());
  };