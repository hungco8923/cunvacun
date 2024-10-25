import React, { useState } from "react";
import Hero from "../components/Hero";
import Gallery from "../components/gallery";
import { slides } from "../dataJPG";
import Dialog from "../components/Dialog";

export default function Landing() {
  const [openHung, setOpenHung] = useState(false);
  const [openHoa, setOpenHoa] = useState(false);
  return (
    <>
      <Hero />
      <div
        className="div-container"
        style={{
          backgroundColor: "#FFC8D2",
          color: "white",
          margin: 0,
          padding: "120px 60px",
        }}
      >
        <div className="lastestImages">
          <h2 style={{ fontSize: "50px" }}>Lastest memories</h2>
          <Gallery slides={slides.toReversed().slice(0, 8)} />
        </div>
      </div>
      <div className="divider">
        <div className="divider__hung" onClick={() => setOpenHung(true)}>
          <p>Hùng</p>
          <Dialog isOpen={openHung} onClose={() => setOpenHung(false)}>
            Dear Cun,
            <br></br>I know I have said this 1000 times, but once again I’m
            still here to say it. You are truly the love of my life. I never
            thought that I could ever be able to love someone like I love you.
            You are a amazing person, you let my inner child to be able to get
            out around you. Being able to spend time and go on this journey with
            you is truly a blessing. I could never ask for a better partner.
            <br></br>
            Things sometime would get rough. At the end of the day, we are still
            two individuals trying to get life together. But I want you to know
            that when things turn bad or maybe it gets so fucked up, I will
            always be right beside you. I don’t know why, but I got a feeling
            that no matter how bad things can be, as long as you and I are still
            together. Nothing is unresolvable.
            <br></br>
            <div className="signature">
              <span>Your love</span>
              <br />
              <span id="signature">Hung</span>
            </div>
          </Dialog>
        </div>
        <div className="divider__hoa" onClick={() => setOpenHoa(true)}>
          <p>Hòa</p>
          <Dialog isOpen={openHoa} onClose={() => setOpenHoa(false)}>
            Hello chồng 😎
            <br />
            Giờ là 2 giờ sáng, em buồn ngủ díp mắt rồi vì vừa mới làm xong cái
            design. Nhưng em muốn anh thức dậy buổi sáng đã có tình yêu bên cạnh
            nên viết gửi anh chút nè. Em biết là gần đây bọn mình rất khó khăn.
            Cả hai đứa cứ vô tình làm tổn thương nhau, ai cũng có góc nhìn riêng
            của bản thân mặc dù thực chất chúng mình chỉ muốn người kia hạnh
            phúc. Mặc dù hay thuyết phục cho bản thân nhưng em biết trong giai
            đoạn này anh là người đặc biệt vất vả, có khi còn hơn cả em. Anh
            gồng gánh nhiều thứ trên vai, từ nỗi buồn bã về những chuyện gần đây
            tới việc defer CFA hay không, từ dỗ dành tính mít ướt của em tới
            việc phải giả vờ tỏ ra là anh chẳng sao. Đấy là còn chưa kể em rất
            thương anh vì anh bị mất ngủ thường xuyên quá, mà gặp chuyện bọn
            mình là anh trắng đêm luôn. Siêu anh hùng trong lòng tui (nói vậy
            nhma ko có nghĩa là anh được ôm hết mọi thứ đâu) May mắn thế nào bọn
            mình vẫn đang nằm đây gọi cho nhau lúc ngủ. Dù đã có điều gì thay
            đổi từ đầu tới giờ, nhưng em tự tin nói rằng tình yêu em dành cho
            anh vẫn vậy, chưa bao giờ ít đi một tí nào. Em có thể đã có lúc nhụt
            chí, nhưng tình yêu dành cho anh vẫn là thứ vực em dậy được. Em tự
            hào và hạnh phúc rất nhiều khi được yêu anh. Em muốn sau này sẽ may
            mắn tới mức được kết hôn với anh và lập một gia đình nhỏ của bọn
            mình. Chắc mấy lời này chả thấm thoát gì với những khó khăn anh đang
            phải chiến đấu. Nhưng ít nhất em cũng phải nói ra những điều tốt đẹp
            anh xứng đáng nghe được, bởi vì ANH LÀ MÓN QUÀ ĐỘC NHẤT ĐẶC BIỆT CỦA
            ÔNG TRỜI TẶNG EM & LÀ SỐ 1 TRONG VŨ TRỤ CỦA EMMM!!!!! Cảm ưn anh vì
            đã đọc tới đây nha, lời em muốn nói súc tích lại thì nó là vậy đó.
            Ăn sáng rùi học hành hay nghỉ ngơi gì đi nhéee. Cứ làm mọi thứ khiến
            anh thoải mái và cần thiết. Em tin tưởng anh và sẽ luôn ở đây đồng
            hành ủng hộ sát cánh với anh vô điều kiện ✨ (nhớ sau xây cho em cái
            nhà dưới biển nhé tỉ phú tương lai) Z thoi, yêu anh rất nhiều kinh
            khủng mãnh liệt
          </Dialog>
        </div>
      </div>
    </>
  );
}
