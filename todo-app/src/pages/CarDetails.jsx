import { useParams } from "react-router-dom"

const CarDetails = () => {
  const { id } = useParams()
  const [CarDetails, setCarDetails] = useState(undefined)
  
  useEffect(() => {
        const handleSearch = async () => {
            try {
                const parameters = new URLSearchParams({
                    model_id: oem_make_model_id
                })
                const res = await fetch(`https://carapi.app/api/trims/v2?${parameters.toString()}`)
                const json = await res.json()
                console.log(json);
                setCarDetails(json)
            } catch (err) {
                console.error(err)
            }
        }
        handleSearch()
    }, [])
 return(
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Каталог автомобилей</title>
  <style>
    body {
      font-family: "Segoe UI", Arial, sans-serif;
      background-color: #f4f6fb;
      margin: 0;
      padding: 30px;
      color: #1e293b;
    }

    h1 {
      text-align: center;
      margin-bottom: 25px;
      font-size: 28px;
      color: #0f172a;
    }

    .search-box {
      max-width: 600px;
      margin: 0 auto 40px auto;
    }

    .search-box input {
      width: 100%;
      padding: 12px 14px;
      font-size: 16px;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }

    .car-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .car-card {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      padding: 16px;
      display: flex;
      flex-direction: column;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }

    .car-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 18px rgba(0,0,0,0.12);
    }

    .car-card h3 {
      margin: 0 0 10px 0;
      font-size: 18px;
      color: #0f172a;
    }

    .car-card p {
      margin: 4px 0;
      font-size: 14px;
      color: #475569;
    }

    .car-card .price {
      margin-top: 10px;
      font-weight: bold;
      font-size: 16px;
      color: #0b5cff;
    }

    .car-card .year {
      font-size: 13px;
      color: #94a3b8;
      margin-bottom: 8px;
    }

    .car-card .desc {
      font-size: 14px;
      color: #334155;
      margin-top: 8px;
    }
  </style>
</head>
<body>

  <h1>Каталог автомобилей</h1>

  <div class="search-box">
    <input type="text" placeholder="Введите марку или модель..." disabled>
  </div>

  <div class="car-list">

    <div class="car-card">
      <div class="year">2022</div>
      <h3>Toyota Camry</h3>
      <p><strong>Производитель:</strong> Toyota</p>
      <p><strong>Модель:</strong> Camry XLE</p>
      <p class="desc">Комфортный седан бизнес-класса с мощным двигателем 2.5L, автоматической коробкой передач и улучшенной шумоизоляцией.</p>
      <p class="price">Стоимость: 2 850 000 ₽</p>
    </div>

    <div class="car-card">
      <div class="year">2021</div>
      <h3>Honda Accord</h3>
      <p><strong>Производитель:</strong> Honda</p>
      <p><strong>Модель:</strong> Accord EX-L</p>
      <p class="desc">Элегантный и экономичный седан с турбированным двигателем 1.5L, системой адаптивного круиз-контроля и кожаным салоном.</p>
      <p class="price">Стоимость: 2 600 000 ₽</p>
    </div>

    <div class="car-card">
      <div class="year">2020</div>
      <h3>BMW X5</h3>
      <p><strong>Производитель:</strong> BMW</p>
      <p><strong>Модель:</strong> X5 xDrive40i</p>
      <p class="desc">Полноразмерный кроссовер с полным приводом, 3.0L TwinPower Turbo и премиальным салоном с панорамной крышей.</p>
      <p class="price">Стоимость: 6 800 000 ₽</p>
    </div>

    <div class="car-card">
      <div class="year">2019</div>
      <h3>Audi A4</h3>
      <p><strong>Производитель:</strong> Audi</p>
      <p><strong>Модель:</strong> A4 Premium</p>
      <p class="desc">Динамичный седан с системой полного привода Quattro, интеллектуальной мультимедией и LED-оптикой.</p>
      <p class="price">Стоимость: 3 100 000 ₽</p>
    </div>

    <div class="car-card">
      <div class="year">2020</div>
      <h3>Ford Mustang</h3>
      <p><strong>Производитель:</strong> Ford</p>
      <p><strong>Модель:</strong> Mustang GT</p>
      <p class="desc">Легендарное купе с 5.0L V8, задним приводом и спортивным интерьером. Классика американского стиля и мощности.</p>
      <p class="price">Стоимость: 4 900 000 ₽</p>
    </div>
    
    <div class="car-card">
      <div class="year">2022</div>
      <h3>Mercedes-Benz C-Class</h3>
      <p><strong>Производитель:</strong> Mercedes-Benz</p>
<p><strong>Модель:</strong> C200 AMG Line</p>
      <p class="desc">Сбалансированный седан с турбодвигателем, пакетом AMG Line и современными системами помощи водителю.</p>
      <p class="price">Стоимость: 4 700 000 ₽</p>
    </div>
  </div>
</body>
</html>
    )
}
export default CarDetails