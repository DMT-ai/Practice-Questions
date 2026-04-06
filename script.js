const lencioniLevels = {
    1: "Thiếu lòng tin",
    2: "Nỗi sợ xung đột",
    3: "Thiếu cam kết",
    4: "Tránh né trách nhiệm",
    5: "Thiếu chú ý đến kết quả"
};

const questionsDb = [
    // --- 6 CÂU DỄ ---
    { id: 1, level: 1, difficulty: "Dễ", situation: "Thành viên che giấu điểm yếu và không dám nhờ sự giúp đỡ từ người khác.", options: [{text: "Ép buộc họ", correct:false}, {text: "Lãnh đạo làm gương cởi mở", correct:true}, {text: "Bỏ qua", correct:false}, {text: "Tách nhóm", correct:false}], explanation: "Sự cởi mở từ lãnh đạo phá vỡ nỗi sợ mất mặt, xây dựng lại Lòng tin." },
    { id: 2, level: 2, difficulty: "Dễ", situation: "Họp nhóm luôn bị gắn mác là tẻ nhạt, mọi người đồng ý quá nhanh để kết thúc sớm.", options: [{text: "Giao việc qua Email", correct:false}, {text: "Thiết lập quy tắc tranh luận lành mạnh", correct:true}, {text: "Trừ lương ai không nói", correct:false}, {text: "Chấp nhận", correct:false}], explanation: "Các nhóm sợ bất đồng thường có những cuộc thảo luận nhàm chán. Cần khuyến khích tranh luận." },
    { id: 3, level: 3, difficulty: "Dễ", situation: "Thành viên không hiểu rõ công việc của mình đóng góp gì vào bức tranh chung, dẫn đến hiệu suất hời hợt.", options: [{text: "Mặc kệ", correct:false}, {text: "Giao thêm việc", correct:false}, {text: "Truyền đạt rõ ràng tầm nhìn và mục tiêu", correct:true}, {text: "Khen thưởng ngẫu nhiên", correct:false}], explanation: "Truyền đạt rõ mục tiêu sẽ giúp mọi người dốc sức cam kết vì họ thấy được giá trị của mình." },
    { id: 4, level: 4, difficulty: "Dễ", situation: "Nhiều người thường xuyên trễ deadline nhỏ nhưng nhóm vẫn làm lơ.", options: [{text: "Đặt kỳ vọng rõ ràng cho từng cá nhân", correct:true}, {text: "Phạt nặng người trễ", correct:false}, {text: "Gia hạn deadline", correct:false}, {text: "Không có hậu quả", correct:false}], explanation: "Không ai muốn đóng vai ác để nhắc nhở nhau. Giải pháp là thiết lập bộ tiêu chuẩn và kỳ vọng rõ ràng từ đầu." },
    { id: 5, level: 5, difficulty: "Dễ", situation: "Nhóm mất phương hướng, làm việc như một cỗ máy mà không tự đánh giá lại mục tiêu chung đã đạt được chưa.", options: [{text: "Chia nhỏ nhóm", correct:false}, {text: "Thiết lập mục tiêu nhóm có thể đo lường và theo dõi", correct:true}, {text: "Tuyển người mới", correct:false}, {text: "Chờ cấp trên đốc thúc", correct:false}], explanation: "Theo dõi tiến độ chung thường xuyên giúp nhóm liên tục chú ý đến kết quả tập thể." },
    { id: 6, level: 1, difficulty: "Dễ", situation: "Mọi người vội vàng kết luận tiêu cực về ý định của đồng nghiệp khi có một sự cố nhỏ xảy ra.", options: [{text: "Tổ chức hoạt động gắn kết để hiểu nhau hơn", correct:true}, {text: "Họp kỷ luật chấn chỉnh", correct:false}, {text: "Ai làm nấy chịu", correct:false}, {text: "Báo cáo nội bộ", correct:false}], explanation: "Sự nghi kỵ đến từ việc chưa thực sự hiểu nhau. Hoạt động gắn kết phá vỡ điều này." },

    // --- 14 CÂU KHÓ ---
    { id: 7, level: 4, difficulty: "Khó", situation: "Dự án liên tục gặp lỗi rải rác. Mọi người đùn đẩy 'Tôi tưởng phần đó phòng khác làm'. Môi trường có vẻ RẤT dĩ hòa vi quý.", options: [{text: "Chỉ định ngay một người chịu tội", correct:false}, {text: "Thiết lập mục tiêu chung và minh bạch trách nhiệm/tiến độ", correct:true}, {text: "Khen thưởng người sửa lỗi giỏi nhất", correct:false}, {text: "Mở lớp dạy kỹ năng giao tiếp", correct:false}], explanation: "'Dĩ hòa vi quý' chỉ là vỏ bọc của việc né tránh nhắc nhở nhau. Cần minh bạch trách nhiệm thay vì phạt/thưởng tức thời." },
    { id: 8, level: 5, difficulty: "Khó", situation: "Gần cuối năm, các cá nhân đổ xô đẩy nhanh tiến độ KPI của riêng mình, phớt lờ việc rà soát chất lượng hệ thống chung của dự án.", options: [{text: "Trao thưởng 'Nhân viên xuất sắc' để tạo động lực", correct:false}, {text: "Nhấn mạnh kết quả tập thể: Thành công nhóm được ưu tiên hơn cá nhân", correct:true}, {text: "Giám sát giờ làm việc từng người", correct:false}, {text: "Bắt buộc làm lại từ đầu", correct:false}], explanation: "Khi cá nhân tập trung KPI hơn mục tiêu nhóm, đó là rào cản 'Thiếu chú ý kết quả chung'." },
    { id: 9, level: 2, difficulty: "Khó", situation: "Họp hành rất nảy lửa, cãi vã liên tục để bảo vệ KPI của từng bên. Quản lý lo sợ mâu thuẫn đang dâng cao nên cấm thảo luận lớn tiếng.", options: [{text: "Hòa giải tình cảm từng cá nhân", correct:false}, {text: "Làm trung gian: Giữ tranh luận tập trung vào ý tưởng vì mục tiêu, không công kích cá nhân", correct:true}, {text: "Tổ chức Team Building", correct:false}, {text: "Giao quyền quyết định cho quản lý 100%", correct:false}], explanation: "Gài hàng (Nhầm với thiếu Lòng tin). Thực chất là họ tranh luận sai cách. Cần Trung gian hướng nó thành tranh luận tích cực thay vì cấm đoán." },
    { id: 10, level: 3, difficulty: "Khó", situation: "Sếp đưa xuống một dự án rất chán, mọi người đồng thanh 'Yes' rập khuôn trong họp để thoát thân, sau đó không thực hiện đàng hoàng.", options: [{text: "Gắn KPI cực nặng", correct:false}, {text: "Mời đi uống bia để dỗ dành", correct:false}, {text: "Tạo cơ hội tham gia vào quá trình phân tích và ra quyết định", correct:true}, {text: "Tìm lỗi và khiển trách", correct:false}], explanation: "Đồng thuận hời hợt là do thiếu sự lắng nghe và đóng góp (Thiếu Cam kết). Ép KPI chỉ sinh ra chống đối." },
    { id: 11, level: 1, difficulty: "Khó", situation: "Nhóm toàn các chuyên gia hạng A. Mọi người rất 'chuyên nghiệp', tuyệt đối không ai mở lời xin kinh nghiệm của người khác.", options: [{text: "Khuyến khích giao tiếp cởi mở về giới hạn năng lực và tạo môi trường an toàn", correct:true}, {text: "Thay đổi quy trình làm việc rườm rà hơn", correct:false}, {text: "Họp đánh giá chéo hiệu suất", correct:false}, {text: "Chia nhỏ họ ra các dự án nhỏ", correct:false}], explanation: "Sự lịch sự giả tạo và cái tôi lớn là vỏ bọc giấu đi sự yếu kém. Khuyến khích sự cởi mở giúp dẹp bỏ rào cản phòng thủ." },
    { id: 12, level: 4, difficulty: "Khó", situation: "Một thành viên giỏi thường xuyên phá vỡ quy trình chung khiến người khác rất khó chịu, nhưng không ai nói thẳng với anh ta.", options: [{text: "Thuyết phục anh ta bằng tình cảm", correct:false}, {text: "Duy trì tính nhất quán: Áp dụng quy tắc công bằng cho mọi thành viên dù là chuyên gia", correct:true}, {text: "Tuyển người ngang tầm", correct:false}, {text: "Chấp nhận sự khác biệt của thiên tài", correct:false}], explanation: "Tránh né trách nhiệm (chỉnh sửa người cùng cấp). Cần quy tắc công bằng cho tất cả mọi người." },
    { id: 13, level: 5, difficulty: "Khó", situation: "Đưa ra các quyết định nhượng bộ để làm hài lòng mọi phe phái trong nhóm, thay vì chọn giải pháp có lợi ích lớn cho công ty.", options: [{text: "Họp tranh luận gay gắt hơn", correct:false}, {text: "Tổ chức biểu quyết số đông", correct:false}, {text: "Chỉ định sếp tự quyết định", correct:false}, {text: "Thiết lập mục tiêu nhóm tối cao làm kim chỉ nam đo lường", correct:true}], explanation: "Sự thỏa hiệp là biểu hiện của việc không có mục tiêu chung tối cao để định hướng (Thiếu chú ý kết quả)." },
    { id: 14, level: 3, difficulty: "Khó", situation: "Khi dự án thất bại, tất cả cùng nói: 'Tôi đã phản đối ngay từ đầu rồi mà không ai nghe.'", options: [{text: "Tìm lại biên bản cuộc họp", correct:false}, {text: "Tham gia vào quá trình quyết định kỹ hơn để phải cam kết với phương án đã chọn", correct:true}, {text: "Kiểm điểm nặng tay tập thể", correct:false}, {text: "Làm quy trình bỏ phiếu ẩn danh", correct:false}], explanation: "Khi mọi người tham gia sâu vào đóng góp, họ sẽ cam kết đồng hành dù kết quả ra sao." },
    { id: 15, level: 2, difficulty: "Khó", situation: "Nhân sự mới có ý tưởng hay nhưng im lặng. Khi được hỏi riêng mới tiết lộ vì sợ sếp phật ý.", options: [{text: "Tuyển người bạo dạn hơn", correct:false}, {text: "Khuyến khích sự thẳng thắn: Ghi nhận và cảm ơn trực tiếp trong họp khi góp ý trái chiều", correct:true}, {text: "Ép nhân sự mới tạo báo cáo", correct:false}, {text: "Mang ý tưởng của nhân sự đó đi trình bày hộ", correct:false}], explanation: "Họ sợ xung đột (mất lòng sếp). Ghi nhận và cảm ơn ý kiến trái chiều là cách gỡ bỏ rào cản này." },
    { id: 16, level: 1, difficulty: "Khó", situation: "Mọi thành tựu cá nhân đều bị đồng nghiệp soi xét, tìm lỗi nhỏ để hả hê sau lưng.", options: [{text: "Tổ chức hoạt động gắn kết, lãnh đạo làm gương cởi mở và xây dựng sự tôn trọng", correct:true}, {text: "Thiết lập nội quy phạt vi phạm đạo đức", correct:false}, {text: "Bầu ra một 'ban kiểm sát' nội bộ", correct:false}, {text: "Không quan tâm chuyện vặt", correct:false}], explanation: "Lòng tin bị phá hủy tận gốc. Phải xây dựng lại từ nền tảng môi trường và sự thiện chí." },
    { id: 17, level: 4, difficulty: "Khó", situation: "Công ty có hệ thống theo dõi lỗi rất xịn. Tuy nhiên không ai chịu dùng nó để góp ý cho nhau vì 'Không phải việc của tôi'.", options: [{text: "Giao hệ thống cho 1 người chuyên trách", correct:false}, {text: "Làm gương: Người lãnh đạo trực tiếp sử dụng quy trình góp ý này làm tiêu chuẩn", correct:true}, {text: "Thưởng tiền cho ai bắt được lỗi", correct:false}, {text: "Tịch thu công cụ", correct:false}], explanation: "Thành viên thụ động tránh né, công cụ vô ích. Lãnh đạo cần dùng nó làm gương." },
    { id: 18, level: 5, difficulty: "Khó", situation: "Chỉ số hài lòng nội bộ rất cao, môi trường vui vẻ, nhưng tỷ lệ đạt mục tiêu doanh thu của nhóm rớt thảm hại.", options: [{text: "Thay đổi dàn nhân viên để có luồng gió mới", correct:false}, {text: "Tập trung cường độ làm việc cường điệu 14h/ngày", correct:false}, {text: "Khen thưởng dựa trên thành công của nhóm khi đạt mục tiêu chiến lược", correct:true}, {text: "Giảm chỉ tiêu xuống", correct:false}], explanation: "Sự phân tâm sai lệch. Nhóm bị lạc lối do thiếu sự nối kết giữa công sức và kết quả thiết yếu." },
    { id: 19, level: 3, difficulty: "Khó", situation: "Hàng tuần công ty đều truyền đạt tầm nhìn vĩ mô rất hoành tráng. Nhưng nhân viên vẫn làm việc theo kiểu 'sáng cắp ô đi, tối cắp ô về'.", options: [{text: "Truyền đạt rõ ràng: Làm rõ sự đóng góp của mảnh ghép từng cá nhân vào bức tranh lớn", correct:true}, {text: "Tổ chức hội thảo tạo động lực", correct:false}, {text: "Đuổi việc luân phiên 10% mỗi tháng", correct:false}, {text: "Khởi động chiến dịch thi đua", correct:false}], explanation: "Mục tiêu vĩ mô mà không bóc tách được vai trò cụ thể thì cá nhân sẽ thấy xa vời và thiếu cam kết." },
    { id: 20, level: 2, difficulty: "Khó", situation: "Đang có xích mích âm ỉ giữa 2 phòng ban, sếp chuyển 2 bên đi 2 khu làm việc độc lập xa nhau.", options: [{text: "Nỗ lực tuyệt vời để dập tắt xung đột", correct:false}, {text: "Thay vì trốn tránh, cần lập quy tắc thảo luận lành mạnh trực tiếp và làm trung gian giữa 2 phòng", correct:true}, {text: "Sáp nhập cứng 2 phòng với nhau kệ họ tự chiến", correct:false}, {text: "Cắt ngân sách để họ phải chia sẻ tài nguyên", correct:false}], explanation: "Trốn tránh vấn đề (Sợ xung đột) chỉ làm tích tụ ngòi nổ. Lãnh đạo cần dùng sự thẳng thắn để trung gian." }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedLevel = null;
let selectedOption = null;

let timeLeft = 10;
let timerInterval = null;

let usedQuestionIds = JSON.parse(localStorage.getItem('teamworkUsedIds') || '[]');

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

const progressFill = document.getElementById("progress-fill");
const questionCounter = document.getElementById("question-counter");
const scoreDisplay = document.getElementById("score-display");
const timerDisplay = document.getElementById("timer-display");
const pyramidLevels = document.querySelectorAll(".pyramid-level");
const difficultyBadge = document.getElementById("difficulty-badge");
const situationText = document.getElementById("situation-text");
const answersContainer = document.getElementById("answers-container");
const btnSubmit = document.getElementById("btn-submit");

const modal = document.getElementById("feedback-modal");
const btnNext = document.getElementById("btn-next");

const rocketStart = document.getElementById("rocket-start");
if (rocketStart) {
    rocketStart.addEventListener("click", () => {
        rocketStart.classList.add("fly-around");
        setTimeout(() => {
            startGame();
            rocketStart.classList.remove("fly-around");
        }, 1500);
    });
}
document.getElementById("btn-restart").addEventListener("click", startGame);
document.getElementById("btn-exit").addEventListener("click", () => {
    endScreen.classList.remove("active");
    startScreen.classList.add("active");
});

function shuffleArray(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startGame() {
    let availableQuestions = questionsDb.filter(q => !usedQuestionIds.includes(q.id));
    let easyPool = availableQuestions.filter(q => q.difficulty === 'Dễ');
    let hardPool = availableQuestions.filter(q => q.difficulty === 'Khó');

    if (easyPool.length < 3 || hardPool.length < 7) {
        usedQuestionIds = [];
        localStorage.removeItem('teamworkUsedIds');
        easyPool = questionsDb.filter(q => q.difficulty === 'Dễ');
        hardPool = questionsDb.filter(q => q.difficulty === 'Khó');
    }

    let pickedEasy = shuffleArray(easyPool).slice(0, 3);
    let pickedHard = shuffleArray(hardPool).slice(0, 7);

    const pickedIds = [...pickedEasy.map(q=>q.id), ...pickedHard.map(q=>q.id)];
    usedQuestionIds = [...usedQuestionIds, ...pickedIds];
    localStorage.setItem('teamworkUsedIds', JSON.stringify(usedQuestionIds));

    currentQuestions = [...pickedEasy, ...pickedHard];
    currentQuestionIndex = 0;
    score = 0;
    
    startScreen.classList.remove("active");
    endScreen.classList.remove("active");
    gameScreen.classList.add("active");
    
    loadQuestion();
}

function loadQuestion() {
    selectedLevel = null;
    selectedOption = null;
    btnSubmit.disabled = true;
    
    pyramidLevels.forEach(lvl => lvl.classList.remove("selected"));
    
    const q = currentQuestions[currentQuestionIndex];
    
    progressFill.style.width = `${(currentQuestionIndex / 10) * 100}%`;
    questionCounter.innerText = `Câu ${currentQuestionIndex + 1} / 10`;
    scoreDisplay.innerText = `Điểm: ${score}`;
    
    difficultyBadge.innerText = q.difficulty;
    difficultyBadge.className = `difficulty-badge ${q.difficulty}`;
    situationText.innerText = q.situation;
    
    let shuffledOptions = shuffleArray(q.options);
    answersContainer.innerHTML = '';
    
    shuffledOptions.forEach((opt, index) => {
        const char = String.fromCharCode(65 + index);
        const div = document.createElement("div");
        div.className = "answer-option";
        div.dataset.correct = opt.correct;
        div.dataset.text = opt.text;
        
        div.innerHTML = `
            <div class="answer-letter">${char}</div>
            <div class="answer-text">${opt.text}</div>
        `;
        div.addEventListener("click", () => selectOption(div));
        answersContainer.appendChild(div);
    });

    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 10;
    updateTimerUI();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();
        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            processAnswer(true);
        }
    }, 1000);
}

function updateTimerUI() {
    timerDisplay.innerText = `⏳ ${timeLeft}s`;
    if(timeLeft <= 3 && timeLeft > 0) {
        timerDisplay.classList.add("timer-pulse");
    } else {
        timerDisplay.classList.remove("timer-pulse");
    }
}

pyramidLevels.forEach(lvl => {
    lvl.addEventListener("click", function() {
        pyramidLevels.forEach(l => l.classList.remove("selected"));
        this.classList.add("selected");
        selectedLevel = parseInt(this.dataset.level);
        checkEnableSubmit();
    });
});

function selectOption(element) {
    document.querySelectorAll(".answer-option").forEach(el => el.classList.remove("selected"));
    element.classList.add("selected");
    selectedOption = element;
    checkEnableSubmit();
}

function checkEnableSubmit() {
    if(selectedLevel !== null && selectedOption !== null) {
        btnSubmit.disabled = false;
    }
}

btnSubmit.addEventListener("click", () => processAnswer(false));

function processAnswer(isTimeout) {
    clearInterval(timerInterval);
    
    const q = currentQuestions[currentQuestionIndex];
    let isLevelCorrect = false;
    let isOptionCorrect = false;
    let chosenOptionText = "Không có";
    
    if(!isTimeout && selectedOption) {
        isLevelCorrect = (selectedLevel === q.level);
        isOptionCorrect = (selectedOption.dataset.correct === "true");
        chosenOptionText = selectedOption.dataset.text;
    }
    
    let earned = 0;
    if(isLevelCorrect) earned += 10;
    if(isOptionCorrect) earned += 10;
    
    score += earned;
    
    showFeedback(isLevelCorrect, isOptionCorrect, q, isTimeout, chosenOptionText);
}

function showFeedback(lCorr, oCorr, q, isTimeout, chosenText) {
    const icon = document.getElementById("feedback-icon");
    const title = document.getElementById("feedback-title");
    const container = document.getElementById("feedback-text");
    
    let correctSolutionText = q.options.find(o => o.correct === true).text;
    let correctLevelText = lencioniLevels[q.level];
    
    let htmlContent = "";

    if(isTimeout) {
        icon.innerText = "⏰";
        title.innerText = "Hết Giờ! (0đ)";
        title.style.color = "var(--error)";
        htmlContent = `
            <p><strong>Tầng đúng:</strong> <span class="correct-text">${correctLevelText}</span></p>
            <p><strong>Giải pháp:</strong> <span class="correct-text">${correctSolutionText}</span></p>
            <div class="expl">${q.explanation}</div>
        `;
    } else {
        if(lCorr && oCorr) {
            icon.innerText = "🎉";
            title.innerText = "Tuyệt Vời! (+20đ)";
            title.style.color = "var(--success)";
            htmlContent = `
                <p>Nắm bắt rất tốt bản chất vấn đề.</p>
                <div class="expl">${q.explanation}</div>
            `;
        } else {
            icon.innerText = "⚠️";
            title.innerText = `Sai rồi ${lCorr || oCorr ? '(+10đ)' : '(0đ)'}`;
            title.style.color = "var(--error)";
            
            htmlContent = `
                <p><strong>Tầng Lencioni:</strong> ${lCorr ? '<span class="correct-text">Đúng</span>' : `<span class="wrong-text">Sai (Đáp án ĐÚNG: ${correctLevelText})</span>`}</p>
                <p><strong>Giải pháp:</strong> ${oCorr ? '<span class="correct-text">Đúng</span>' : ` <span class="wrong-text">Sai</span><br>Bạn chọn: <i>${chosenText}</i><br><strong>Đúng phải là:</strong> <span class="correct-text">${correctSolutionText}</span>`}</p>
                <div class="expl">${q.explanation}</div>
            `;
        }
    }
    
    container.innerHTML = htmlContent;
    modal.classList.add("show");
}

btnNext.addEventListener("click", () => {
    modal.classList.remove("show");
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        setTimeout(loadQuestion, 300);
    } else {
        showEndScreen();
    }
});

function showEndScreen() {
    gameScreen.classList.remove("active");
    endScreen.classList.add("active");
    
    document.getElementById("final-score").innerText = `${score} / 200`;
    const fmsg = document.getElementById("final-message");
    if (score >= 180) fmsg.innerText = "Xuất sắc! Bạn là một Leader Lencioni thực thụ. 🌟";
    else if (score >= 140) fmsg.innerText = "Giỏi lắm! Đội ngũ của bạn đang rất ổn. 👍";
    else if (score >= 100) fmsg.innerText = "Cố lên! Bạn cần phân tích sâu hơn. 💪";
    else fmsg.innerText = "Bạn cần rèn luyện thêm. 📚";
}
