class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
        <div class="container-fluid">   
        <p><b>Disclaimer**</b> This website is for information purpose only. By providing the information contained herein we are not treating, curing, mitigating or preventing any type of medical condition. All we do is make sure you get informed/alerted on your physical condition providing the first aid so that you get the required treatment at right time. Before beginning any type of treatment, it is advisable to consult a licensed healthcare professional.</p>			
        </div>
    </footer>
      `;
    }
}

customElements.define('footer-component', Footer);



