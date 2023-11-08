export async function fetchCars(){
    const headers = {
		'X-RapidAPI-Key': 'a1734c0813msh054d720e014136bp163309jsn5a9a1fe8d968',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers:headers});
    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg: number, year:number) =>{
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = .05;
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear()-year) * ageFactor;
    const rentalRatePerDay = basePricePerDay +mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);
}