document.addEventListener("DOMContentLoaded", () => {
	const SCHEMA = {
		COLORS: {
			RED: 'rgba(242, 63, 81, 0.8)',
			BLUE: 'rgba(124, 124, 222, 0.8)',
			DRAW: 'rgba(232, 232, 232, 0.8)',
			TILE_DEFAULT: '#DCDCCA',
			TILE_RED: '#F23F51',
			TILE_BLUE: '#7C7CDE',
		},
		MESSAGES: {
			RED_WIN: "<span>ЧЕРВОНІ ВИГРАЛИ</span>",
			BLUE_WIN: "<span>СИНІ ВИГРАЛИ</span>",
			DRAW: "<span>НІЧИЯ</span>"
		},
		QUOTE_TIMEOUT: 7000,
		QUOTES: [
			"Тисніть 'рестарт', швидше!",
			"Як Ви думаєте, чому я такий веселий?",
			"Думаю Вам час натискати 'рестарт'",
			"Моя мама грає краще за Вас",
			"Просто натисніть 'рестарт'",
			"Капітошка? Ні, не чув...",
			"Довго будете на мене дивитись?",
			"Браузери не моя стихія...",
			"Обожнюю цю гру!",
			"Як Ви думаєте, чому я такий веселий?",
			"Колись я жив біля лісу..."
		],
		WIN_COMBINATIONS: [
			[0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
			[0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
			[0, 4, 8], [2, 4, 6]             // Diagonals
		]
	};

	const tiles = document.querySelectorAll('.tile');
	const winScreen = document.getElementById('winScreen');
	const winMessage = document.getElementById('winMessage');
	const board = document.getElementById('board');
	const slime = document.getElementById('slime');
	const quote = document.getElementById('quote');
	let move = 1;
	let gameState = Array(9).fill(null);

	const checkForWinner = () => {
		for (let combo of SCHEMA.WIN_COMBINATIONS) {
			const [a, b, c] = combo;
			if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
				return gameState[a];
			}
		}

		if (!gameState.includes(null)) {
			return 'draw';
		}

		return null;
	};

	const handleTileClick = (tile, index) => {
		if (tile.style.background !== SCHEMA.COLORS.TILE_BLUE && tile.style.background !== SCHEMA.COLORS.TILE_RED) {
			tile.style.background = move % 2 === 0 ? SCHEMA.COLORS.TILE_RED : SCHEMA.COLORS.TILE_BLUE;
			gameState[index] = move % 2 === 0 ? 'r' : 'b';

			const winner = checkForWinner();
			if (winner) {
				winScreen.style.display = 'flex';
				switch (winner) {
					case 'r':
						winScreen.style.background = SCHEMA.COLORS.RED;
						winMessage.innerHTML = SCHEMA.MESSAGES.RED_WIN;
						break;
					case 'b':
						winScreen.style.background = SCHEMA.COLORS.BLUE;
						winMessage.innerHTML = SCHEMA.MESSAGES.BLUE_WIN;
						break;
					default:
						winScreen.style.background = SCHEMA.COLORS.DRAW;
						winMessage.innerHTML = SCHEMA.MESSAGES.DRAW;
				}

				winScreen.style.width = `${board.clientWidth}px`;
				winScreen.style.height = `${board.clientHeight}px`;

				slime.style.display = 'block';
				quote.style.display = 'block';
			}
			move++;
		}
	};

	tiles.forEach((tile, index) => {
		tile.addEventListener("click", () => handleTileClick(tile, index));
	});

	window.restartGame = () => {
		gameState.fill(null);
		move = 1;
		tiles.forEach(tile => tile.style.background = SCHEMA.COLORS.TILE_DEFAULT);
		winScreen.style.display = 'none';
		slime.style.display = 'none';
		quote.style.display = 'none';
	};

	setInterval(() => {
		const randQ = Math.floor(Math.random() * SCHEMA.QUOTES.length);
		quote.textContent = SCHEMA.QUOTES[randQ];
	}, SCHEMA.QUOTE_TIMEOUT);
});
