
  export function openPopup(massage) {
    document.querySelector('.modal-overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
    document.getElementById('showModal').innerHTML = massage;
}
    export   function closePopup() {
    document.querySelector('.modal-overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
    window.location.href = "home.html";

}