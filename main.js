
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll(".tab-content")
// console.log('tab-buttons',tabButtons)
tabButtons.forEach(tabButton => {
	tabButton.addEventListener('click', function(event){
		removeActiveClassFromAllItem()
		this.classList.add("tab-button-active")
		const {tabContentId} = this.dataset;
		updateTabContent(tabContentId);
	})
})

function updateTabContent(tabContentId){
	tabContents.forEach(item => {
		const {tabButtonId} = item.dataset
		item.classList.remove("tab-content-active")
		if (tabContentId === tabButtonId){
			item.classList.add("tab-content-active");
		}
	})
}

function removeActiveClassFromAllItem(){
	tabButtons.forEach(item => {
		item.classList.remove('tab-button-active');
	})
}