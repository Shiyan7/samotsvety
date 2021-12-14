document.addEventListener("DOMContentLoaded", () => {
	const maps = document.querySelectorAll(".map");

	maps.forEach(el => {
		let center = [48.8866527839977, 2.34310679732974];

		function init() {

			var mapCenter = [48.8866527839977, 2.34310679732974],
				map = new ymaps.Map(el, {
					center: mapCenter,
					zoom: 10,
					controls: []
				});
				/* placemarks = []; */

			/* // Создаем собственный макет с информацией о выбранном геообъекте.
			var customBalloonContentLayout = ymaps.templateLayoutFactory.createClass([
				`
    
				<div class="offices-item map-item">
					<img class="offices-item__image map-item__image" src="img/no-image.svg" alt="Офис 1">
					<div class="store-item__right map-item__right">
						<a class="offices-item__desc offices-item__single-tel" href="#">Тел.: 8 (800) 555-32-98</a>
						<p class="offices-item__desc offices-item__location">г. Санкт-Петербург, пл. Фаберже, 8</p>
						<span class="offices-item__metro offices-item__metro--blue">
						<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.74363 8.24606C8.49925 7.42446 9.40929 6.75974 10.4218 6.28984C11.4343 5.81995 12.5295 5.55408 13.6447 5.50743C14.76 5.46077 15.8735 5.63424 16.9217 6.01793C17.97 6.40162 18.9323 6.98801 19.7539 7.74363C20.5755 8.49925 21.2403 9.40929 21.7102 10.4218C22.1801 11.4343 22.4459 12.5295 22.4926 13.6447C22.5392 14.76 22.3658 15.8735 21.9821 16.9217C21.5984 17.97 21.012 18.9323 20.2564 19.7539C19.5008 20.5755 18.5907 21.2403 17.5782 21.7102C16.5657 22.1801 15.4705 22.4459 14.3553 22.4926C13.24 22.5392 12.1265 22.3658 11.0783 21.9821C10.03 21.5984 9.06766 21.012 8.24606 20.2564C7.42446 19.5008 6.75974 18.5907 6.28984 17.5782C5.81995 16.5657 5.55408 15.4705 5.50743 14.3553C5.46077 13.24 5.63424 12.1265 6.01793 11.0783C6.40162 10.03 6.98801 9.06766 7.74363 8.24606L7.74363 8.24606Z" stroke="var(--color)"></path>
							<path d="M18 10V18H16.751V13.045L14.3939 18H13.6061L11.2426 13.045V18H10V10H11.044L13.9968 16.1581L16.9496 10H18Z" fill="var(--color)"></path>
						</svg>
						<span class="offices-item__desc">ст. м. Технологический институт - 2</span>
						</span>
						<p class="offices-item__desc offices-item__hours">Пн—Пт с 10:00 до 21:00 Сб—Вс с 10:00 до 17:00</p><a
						class="offices-item__link" href="mailto:jewel@russammarket.ru">jewel@russammarket.ru</a>
					</div>
				</div>
			
				`
			].join(''));

			var clusterer = new ymaps.Clusterer({
				clusterDisableClickZoom: true,
				clusterOpenBalloonOnClick: true,
				// Устанавливаем режим открытия балуна. 
				// В данном примере балун никогда не будет открываться в режиме панели.
				clusterBalloonPanelMaxMapArea: 0,
				// По умолчанию опции балуна balloonMaxWidth и balloonMaxHeight не установлены для кластеризатора,
				// так как все стандартные макеты имеют определенные размеры.
				clusterBalloonMaxHeight: 200,
				// Устанавливаем собственный макет контента балуна.
				clusterBalloonContentLayout: customBalloonContentLayout
			});

			// Заполняем кластер геообъектами со случайными позициями.
			for (var i = 0, l = 100; i < l; i++) {
				var placemark = new ymaps.Placemark(center, {
					// Устаналиваем данные, которые будут отображаться в балуне.
					balloonContentHeader: 'Заголовок метки №' + (i + 1),
					balloonContentBody: 'Информация о метке №' + (i + 1),
					placemarkId: i
				});
				placemarks.push(placemark);
			}

			clusterer.add(placemarks);
			map.geoObjects.add(clusterer);


			function getRandomPosition() {
				return [
					mapCenter[0] + (Math.random() * 0.3 - 0.15),
					mapCenter[1] + (Math.random() * 0.5 - 0.25)
				];
			}
			clusterer.balloon.open(clusterer.getClusters()[0]); */
		}

		window.ymaps?.ready(init);
	});
});