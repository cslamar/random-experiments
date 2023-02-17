//Define the regions here
const REGIONS = {
	"Global": {fontColor: "#ffffff", backgroundColor: "#7e1ab1"},
	"N. Virginia": {fontColor: "#97c8f0", backgroundColor: "#b11a1a"},
	"Ohio": {fontColor: "#d43547", backgroundColor: "blue"},
	"N. California": {fontColor: "#be8b5e", backgroundColor: "#317549"},
	"Oregon": {fontColor: "#ffeb07", backgroundColor: "#3e92ab"},
	"Hong Kong": {fontColor: "#d71811", backgroundColor: "#ffffff"},
	"Mumbai": {fontColor: "#138808", backgroundColor: "#ff9933"},
	"Seoul": {fontColor: "#359a3e", backgroundColor: "#be1135"},
	"Singapore": {fontColor: "#ffffff", backgroundColor: "#ed2939"},
	"Sydney": {fontColor: "#262873", backgroundColor: "#f0ba19"},
	"Tokyo": {fontColor: "#ffffff", backgroundColor: "#4b0082"},
	"Central": {fontColor: "#d52b1e", backgroundColor: "#ffffff"},
	"Frankfurt": {fontColor: "#fccf00", backgroundColor: "#ff0000"},
	"Ireland": {fontColor: "#ff883e", backgroundColor: "#169b62"},
	"London": {fontColor: "#cf142b", backgroundColor: "#ffffff"},
	"Paris": {fontColor: "#ed2939", backgroundColor: "#002395"},
	"Stockholm": {fontColor: "#ffc90e", backgroundColor: "#2452bd"},
	"US-Gov-West": {fontColor: "#ffc90e", backgroundColor: "#33335F"},
	"US-Gov-East": {fontColor: "#ffc90e", backgroundColor: "#9B1C2C"},
	"S&atilde;o Paulo": {fontColor: "#294292", backgroundColor: "#212125"}
};

//You can access the nav-regionMenu directly
const regionMenuParent = document.querySelector("nav");

// Get region name text
const regionText = document.querySelector('span[data-testid="awsc-nav-regions-menu-button"]').textContent;

//Check if you have that region defined
if (REGIONS.hasOwnProperty(regionText) && window.location.host.includes("console.aws.amazon.com")) {
	//Apply the styles
	let style = REGIONS[regionText];
	regionMenuParent.style.backgroundColor = style.backgroundColor
} else {
	//Warn the user they are missing a region
	console.error(`AWS Region Color Changer Extension is missing the region: ${regionText}`);
}
