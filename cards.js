import Respo from './src/icons/respo.png';
import Clock from './src/icons/clock.png';
import Modern from './src/icons/modern.png';
import Clear from './src/icons/clear.png';
import RespoPhone from './src/mockups/resp.png';
import School from './src/mockups/school.png';


export const addCard = () => {
    intro();
    offer();
    jobs();
}

const intro = () => {
    const introBox = document.getElementById('secIntro');
    introBox.insertAdjacentHTML('afterbegin', `
        <div >
            <h1>Nincs még weboldalad vagy elégedetlen vagy a jelenlegivel?</h1>
            <h3>Szeretnél egyedi, bevételnövelő, modern weboldalt?</h3>
            <h4>Kérj árajánlatot és elkészítjük számodra azt a weboldalt, amellyel igazán sikeresen fogod tudni értékesíteni vállalkozásod 
            szolgáltatásait, termékeit.</h4>
        
        <button id="bid" >Megvalósítom az ötletem</button>  
        </div>
        
    `)
}

const offer= ()=>{
    const offerBox = document.getElementById('offer');
    
    offerBox.insertAdjacentHTML(`afterbegin`, `
    <div class="offerContainer">
    <h3 class="offerTitle">Egy hatékony weboldal...</h3>
    <div class="cardBox">
        <div class="cards">
        <h3>Reszponzív</h3>
        <img src="${Respo}" class="cardPics">
            <p>Optimális megjelenést biztosít a legkülönfélébb eszközökön. pl.: laptop, mobil, asztali számítógép, tablet</p>
        </div>
        <div class="cards">
            <h3>Gyors</h3>
            <img src="${Clock}" class="cardPics">
            <p>A maximális felhasználói élmény érdekében villámgyors.</p>
        </div>
    </div>
    <div>
    <img src="${RespoPhone}" class="respoPhone">
    </div>
    <div class="cardBox">
        <div class="cards">
            <h3>Átlátható</h3>
            <img src="${Clear}" class="cardPics">
            <p>Struktúrált, jól átlátható, könnyen kezelhető a célközönség számára.</p>
        </div>
        <div class="cards">
            <h3>Modern</h3>
            <img src="${Modern}" class="cardPics">
            <p>Interakcióra ösztönző, letisztult, modern megjelenés és felépítés.</p>
        </div>
    </div>
    </div>
    `)
}

const jobs = () => {
    const jobs = document.getElementById('jobs');
    jobs.insertAdjacentHTML('afterbegin', `
    <div>
        <h3 class="jobsText">Munkáink</h3>
        <p class="jobsText">Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. </p>
    </div>
    <div class="mockupBox">
    <img src="${School}" class="mockups">
    </div>
    `)
}

const price = () => {
    const price = document.getElementById('price');
    price.insertAdjacentHTML('afterbegin', `
    
    `)
}

const contact = () => {
    const contact = document.getElementById('contact')
    contact.insertAdjacentHTML('afterbegin', `
    <zizi-card id="z4">
        <div class="firstCard">
            <h1>Kapcsolat</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license 
        
            (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg>
        </div>
        <div class="card-content">
            <div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div> 
        </div>
    </zizi-card>
    `)
}