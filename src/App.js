import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <div className="invite">
            <p>Приглашение <br/> на свадьбу</p>
          </div>
          <div className="name">
            <div className="name1">Адил</div>
            <div className="name2">&</div>
            <div className="name3">Махира</div>
          </div>

          <div className="time">
            <p>8 октября</p>
            <p>17:00</p>
            <p className="restaurant">Ресторан "Ак-кеме"</p>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="mainText">
          <div className="about">
            <p className="about_text">Мы рады сообщить Вам, что 8 октября 2022 состоится самое главное торжество <br/>
              в нашей жизни - <br/>
              день нашей свадьбы!</p>
            <br/>
            <p className="about_text">Приглашаем Вас разделить <br/>
              c нами радость этого <br/>
              незабываемого дня</p>
            <br/>
            <p className="about_text about_text1"> Пожалуйста, не дарите нам цветы! <br/> Лучший подарок молодой семье –
              в конверте </p>
            <img className="BGPlace" src="https://wdpst.store/images/457084/8fac08.png" alt=""/>
            <div className="dress">
              <p><span>Дресс-код</span></p>
              <p className="dress_text">Мы будем рады видеть девушек в <br/> вечерних платьях, а мужчин
                в <br/> классических костюмах.</p>
                <br/>
            </div>
          </div>
        </div>
      </div>
      <div className="timing">
        <p className="schedule">Свадебное расписание</p>
        <div className="timing_time">
          <span>15:00</span>
          <p className="timing_time_txt">Сбор Гостей. Начало <br/>  фуршета</p>
        </div>
        <div className="timing_time">
          <span>16:00</span>
          <p className="timing_time_txt">Торжественная <br/> церемония</p>
        </div>
        <div className="timing_time">
          <span>17:00</span>
          <p className="timing_time_txt">Начало банкета</p>
        </div>
        <div className="timing_time">
          <span>22:00</span>
          <p className="timing_time_txt">Завершение  <br/>официалной части. <br/> Празднечный салют</p>
        </div>
        <div className="timing_time">
          <span>23:00</span>
          <p className="timing_time_txt">окончания банкета</p>
        </div>
      </div>
      <p className="copyright">USMANOV</p>
    </div>


  );
}

export default App;
