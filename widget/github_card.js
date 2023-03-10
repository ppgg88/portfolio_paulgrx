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
    <a href="${n.html_url}" target="_blank" rel="noopener" class="btn btn-outline-light mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg></a>
    `,
  widgetStyle =
    "/* resets */h1, div, p {    margin: 0px;    padding: 0px;    font-family: 'Roboto','sans serif';}#github-logo{    height: 20px;    position: absolute;    top: 10px;    right: 10px;}.cover{    height: 120px;    width: 100%;    background: #FF5C5C;    position: absolute;    left: 0px;    top: 0px;    border-top-left-radius: 5px;    border-top-right-radius: 5px;}/* parimary style*/.card {    position: relative;    display: inline-block;    background: #ffffff;    border-radius: 5px;    box-shadow:  0 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16);    text-align: center;    padding: 20px 30px;    padding-top: 5px;}.card .fa-github {    position: absolute;    color: #646464;    font-size: 20px;    top: 10px;    right: 10px;}.card .card-title {    font-family: 'Baloo Paaji 2', cursive;    color: #434343;    margin-bottom: -8px;    font-size: 30px;    font-weight: 600;}.card .card-username {    margin-bottom: 20px;    color: #646464;}.card .card-desc {    width: 250px;    margin: auto;    display: block;    font-weight: 600;    color: #0000008a;}.card .card-img-wrapper {    position: relative;    height: 167px;    width: 171.74px;    margin: 10px auto;    margin-bottom: 20px;}.card .card-img-wrapper img {    height: 100%;    width: 100%;    border-radius: 50%;}.card .card-footer {    margin-top: 40px;}.card .card-footer .footer-box {    position: relative;    background: #efefef;    border-top: 2px solid #ff9b9b;    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.26), 0 2px 4px -1px rgba(0, 0, 0, 0.06);    border-radius: 5px;    width: 300px;    margin: 0 auto;    padding: 10px;    display: flex;    justify-content: space-around;}.card .card-footer .footer-box .box-wrapper {    position: relative;}.card .card-footer .footer-box .box-wrapper .count {    font-family: 'Baloo Paaji 2', cursive;    color: #434343;    font-size: 25px;    font-weight: 600;}.card .card-footer .footer-box .box-wrapper .box-text {    font-size: 12px;    font-weight: 600;    color: #00000085;    letter-spacing: 0.5px;}@media(max-width:400px){    .card .card-footer .footer-box{        width: 100%;    }}"
customElements.define('github-card', myCard)
