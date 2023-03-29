import Rank1 from "../../assets/1.png";
import Rank2 from "../../assets/2.png";
import Rank3 from "../../assets/3.png";
import Rank4 from "../../assets/4.png";
import Rank5 from "../../assets/5.png";
import Rank6 from "../../assets/6.png";
import Rank7 from "../../assets/7.png";
import Rank8 from "../../assets/8.png";
import styled from "styled-components";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

interface IdolImgType {
  url: string;
  rank: number;
}

const IdolImg = styled.div<IdolImgType>`
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: ${props => (props.rank <= 3 ? "10vw" : "7vw")};
  height: ${props => (props.rank <= 3 ? "10vw" : "7vw")};
  margin: 15px 0px 0px 5px;
  z-index: 1;
`;

const NameDiv = styled.div`
  margin: 3px auto 0;
  font-size: 15px;
`;

function Logo(rank: any) {
  switch (rank) {
    case 1:
      return <img src={Rank1} alt="" width="40px" style={{ position: "absolute" }} />;
    case 2:
      return <img src={Rank2} alt="" width="40px" style={{ position: "absolute" }} />;
    case 3:
      return <img src={Rank3} alt="" width="40px" style={{ position: "absolute" }} />;
    case 4:
      return <img src={Rank4} alt="" width="40px" style={{ position: "absolute" }} />;
    case 5:
      return <img src={Rank5} alt="" width="40px" style={{ position: "absolute" }} />;
    case 6:
      return <img src={Rank6} alt="" width="40px" style={{ position: "absolute" }} />;
    case 7:
      return <img src={Rank7} alt="" width="40px" style={{ position: "absolute" }} />;
    case 8:
      return <img src={Rank8} alt="" width="40px" style={{ position: "absolute" }} />;
  }
}

/** rank, name, img 필요 */
function IdolRank(props: any) {
  return (
    <WrapperDiv>
      {Logo(props.rank)}
      <IdolImg url={props.url} rank={props.rank} />
      <NameDiv>{props.name}</NameDiv>
    </WrapperDiv>
  );
}

export default IdolRank;
