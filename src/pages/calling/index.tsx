import React, { useState, useEffect, useRef } from "react";
import * as _ from "./style";
import Logo from "../../assets/logo.svg";
import Title from "../../assets/title.svg";
import { useNavigate } from "react-router-dom";

const messages = [
  "여보세요? 잘 잤어요? 지금 시간이 몇 시인지 아세요? 슬슬 일어날 시간이에요. 오늘도 좋은 하루 함께 시작해봐요!",
  "안녕하세요 저는 당신의 아침 도우미예요. 벌써 아침이에요! 이불 속이 포근하겠지만, 일어날 시간이에요. 화이팅!",
  "좋은 아침이에요! 아직도 자고 있나요? 오늘 계획한 일들이 기다리고 있어요. 천천히 기지개 켜고, 일어나볼까요?",
  "띠리리~ 아침 알람 전화입니다. 오늘도 어김없이 하루가 시작됐어요. 창밖 햇살도 예쁘고요. 이제 일어나세요!",
  "헬로~ 오늘은 어떤 하루를 보내고 싶으세요? 먼저 일어나는 것부터 시작해봐요. 제가 깨우러 왔잖아요!",
];

const Calling: React.FC = () => {
  const [isRepeating, setIsRepeating] = useState(false);
  const repeatingRef = useRef(isRepeating);
  const navigate = useNavigate();

  const speak = () => {
    if (!("speechSynthesis" in window)) return;

    const randomIndex = Math.floor(Math.random() * messages.length);
    const utterance = new SpeechSynthesisUtterance(messages[randomIndex]);
    utterance.lang = "ko-KR";
    utterance.rate = 1.2;
    utterance.pitch = 0.9;

    window.speechSynthesis.speak(utterance);

    utterance.onend = () => {
      if (repeatingRef.current) {
        // 다음 발화 시작
        setTimeout(speak, 1000); // 1초 텀
      }
    };
  };

  const handleSpeakToggle = () => {
    const newRepeating = !isRepeating;
    setIsRepeating(newRepeating);
    repeatingRef.current = newRepeating;

    if (newRepeating) {
      speak();
    } else {
      window.speechSynthesis.cancel();
      navigate("../");
    }
  };

  // 컴포넌트 언마운트 시 TTS 중지
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <_.Container>
      <_.CallBox>
        <_.Title src={Title} alt="타이틀" />
        <_.Logo src={Logo} alt="로고" />
        이제 일어날 시간이에요!
      </_.CallBox>
      <_.CallButton onClick={handleSpeakToggle}>
        {isRepeating ? "call_end" : "call"}
      </_.CallButton>
    </_.Container>
  );
};

export default Calling;
