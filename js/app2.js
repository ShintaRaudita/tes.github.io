document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch('./js/salman.json'); // Mengambil file userData.json
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const userData = await response.json();
  
      // Select elements by their IDs
      const namaElement = document.getElementById("nama1");
      const npmElement = document.getElementById("npm1");
      const kelasElement = document.getElementById("kelas1");
      const emailElement = document.getElementById("email1");

  
      // Populate HTML elements with user data
      namaElement.textContent = userData.name;
      npmElement.textContent = userData.npm;
      kelasElement.textContent = userData.kelas;
      emailElement.textContent = userData.email;

    } catch (error) {
      console.error('Error:', error);
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch('./js/shinta.json'); // Mengambil file userData.json
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const userData = await response.json();
  
      // Select elements by their IDs
      const namaElement = document.getElementById("nama2");
      const npmElement = document.getElementById("npm2");
      const kelasElement = document.getElementById("kelas2");
      const emailElement = document.getElementById("email2");

  
      // Populate HTML elements with user data
      namaElement.textContent = userData.name;
      npmElement.textContent = userData.npm;
      kelasElement.textContent = userData.kelas;
      emailElement.textContent = userData.email;

    } catch (error) {
      console.error('Error:', error);
    }
});
