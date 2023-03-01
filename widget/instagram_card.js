class myCard extends HTMLElement {
  constructor () {
    super()
    const n = this.attachShadow({ mode: 'open' }),
      t = document.createElement('style')
    t.textContent = widgetStyle
    const o = document.createElement('div')
    o.setAttribute('class', 'card-wrapper')
    const e = document.createElement('div')
    ;(async n => {
      const t = await fetch(`https://api.github.com/users/${n}`, {
        method: 'GET',
        headers: {
          Authorization: {
            token: 'fd8c6d9dacf9f71f2b9ff2d8131bf66de7f046d0',
            'Content-Type': 'application/json'
          }
        }
      })
      return await t.json()
    })(this.getAttribute('data-user')).then(n => {
      e.innerHTML = template(n)
    }),
      n.appendChild(t),
      n.appendChild(o),
      o.appendChild(e)
  }
  loadFont (n) {
    let t = document.head,
      o = document.createElement('link')
    ;(o.type = 'text/css'),
      (o.rel = 'stylesheet'),
      (o.href = n),
      t.appendChild(o)
  }
  connectedCallback () {
    this.loadFont(
      'https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;600&family=Roboto&display=swap'
    )
  }
}
const template = n =>
    ` 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <a href="https://www.instagram.com/paulgrx/" target="_blank" rel="noopener" class="btn btn-outline-light mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
  </svg></a>
    `,
  widgetStyle =
    "/* resets */h1, div, p {    margin: 0px;    padding: 0px;    font-family: 'Roboto','sans serif';}#github-logo{    height: 20px;    position: absolute;    top: 10px;    right: 10px;}.cover{    height: 120px;    width: 100%;    background: #FF5C5C;    position: absolute;    left: 0px;    top: 0px;    border-top-left-radius: 5px;    border-top-right-radius: 5px;}/* parimary style*/.card {    position: relative;    display: inline-block;    background: #ffffff;    border-radius: 5px;    box-shadow:  0 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16);    text-align: center;    padding: 20px 30px;    padding-top: 5px;}.card .fa-github {    position: absolute;    color: #646464;    font-size: 20px;    top: 10px;    right: 10px;}.card .card-title {    font-family: 'Baloo Paaji 2', cursive;    color: #434343;    margin-bottom: -8px;    font-size: 30px;    font-weight: 600;}.card .card-username {    margin-bottom: 20px;    color: #646464;}.card .card-desc {    width: 250px;    margin: auto;    display: block;    font-weight: 600;    color: #0000008a;}.card .card-img-wrapper {    position: relative;    height: 167px;    width: 171.74px;    margin: 10px auto;    margin-bottom: 20px;}.card .card-img-wrapper img {    height: 100%;    width: 100%;    border-radius: 50%;}.card .card-footer {    margin-top: 40px;}.card .card-footer .footer-box {    position: relative;    background: #efefef;    border-top: 2px solid #ff9b9b;    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.26), 0 2px 4px -1px rgba(0, 0, 0, 0.06);    border-radius: 5px;    width: 300px;    margin: 0 auto;    padding: 10px;    display: flex;    justify-content: space-around;}.card .card-footer .footer-box .box-wrapper {    position: relative;}.card .card-footer .footer-box .box-wrapper .count {    font-family: 'Baloo Paaji 2', cursive;    color: #434343;    font-size: 25px;    font-weight: 600;}.card .card-footer .footer-box .box-wrapper .box-text {    font-size: 12px;    font-weight: 600;    color: #00000085;    letter-spacing: 0.5px;}@media(max-width:400px){    .card .card-footer .footer-box{        width: 100%;    }}"
customElements.define('instagram-card', myCard)
