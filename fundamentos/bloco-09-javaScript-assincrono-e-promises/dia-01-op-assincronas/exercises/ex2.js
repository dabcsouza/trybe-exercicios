const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (callback) => {
  setTimeout(() => {
    const temperature = callback(),
          menssage = `Mars temperature is: ${temperature} degrees Celsius`;
          console.log(menssage);    
  },messageDelay());
}

sendMarsTemperature(getMarsTemperature); // imprime "Mars temperature is: 20 degree Celsius", por exemplo