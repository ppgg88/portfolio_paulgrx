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
    <a href="https://www.linkedin.com/in/paul-giroux/" target="_blank" rel="noopener" class="btn btn-outline-light mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
    </svg></a>
    `,
  widgetStyle =
    "/* resets */h1, div, p {    margin: 0px;    padding: 0px;    font-family: 'Roboto','sans serif';}#github-logo{    height: 20px;    position: absolute;    top: 10px;    right: 10px;}.cover{    height: 120px;    width: 100%;    background: #FF5C5C;    position: absolute;    left: 0px;    top: 0px;    border-top-left-radius: 5px;    border-top-right-radius: 5px;}/* parimary style*/.card {    position: relative;    display: inline-block;    background: #ffffff;    border-radius: 5px;    box-shadow:  0 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16);    text-align: center;    padding: 20px 30px;    padding-top: 5px;}.card .fa-github {    position: absolute;    color: #646464;    font-size: 20px;    top: 10px;    right: 10px;}.card .card-title {    font-family: 'Baloo Paaji 2', cursive;    color: #434343;    margin-bottom: -8px;    font-size: 30px;    font-weight: 600;}.card .card-username {    margin-bottom: 20px;    color: #646464;}.card .card-desc {    width: 250px;    margin: auto;    display: block;    font-weight: 600;    color: #0000008a;}.card .card-img-wrapper {    position: relative;    height: 167px;    width: 171.74px;    margin: 10px auto;    margin-bottom: 20px;}.card .card-img-wrapper img {    height: 100%;    width: 100%;    border-radius: 50%;}.card .card-footer {    margin-top: 40px;}.card .card-footer .footer-box {    position: relative;    background: #efefef;    border-top: 2px solid #ff9b9b;    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.26), 0 2px 4px -1px rgba(0, 0, 0, 0.06);    border-radius: 5px;    width: 300px;    margin: 0 auto;    padding: 10px;    display: flex;    justify-content: space-around;}.card .card-footer .footer-box .box-wrapper {    position: relative;}.card .card-footer .footer-box .box-wrapper .count {    font-family: 'Baloo Paaji 2', cursive;    color: #434343;    font-size: 25px;    font-weight: 600;}.card .card-footer .footer-box .box-wrapper .box-text {    font-size: 12px;    font-weight: 600;    color: #00000085;    letter-spacing: 0.5px;}@media(max-width:400px){    .card .card-footer .footer-box{        width: 100%;    }}"
customElements.define('linkedin-card', myCard)
