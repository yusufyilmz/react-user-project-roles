

// import styled from 'styled-components';

// export const Ul = styled.ul`
// z-index: 10;
// position: absolute;
// width: 70%;
// border: 1px solid #dfdfdf;
//  border-bottom-right-radius: 3px; 
//  border-bottom-left-radius: 3px; 
// background-color: #fff;
// -webkit-box-shadow: 0 2px 5px -1px #e8e8e8;
// box-shadow: 0 2px 5px -1px #e8e8e8;
// font-weight: 700;
// max-height: 215px;
// overflow-y: scroll;
// -webkit-overflow-scrolling: touch;
//   `;

// export const Li = styled.li`
//     width: 100%;
//     font-size: 1rem;
//     padding: 8px 10px;
//     line-height: 1.6rem;
//     cursor: default;
//     display: inline-block;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//   &.selected {
//     color: #fff;
//     background-color: #27435c;
//   }
//   &:hover {
//     color: white;
//     background-color: #27435c;
//   }`;






import styled from 'styled-components';

export const Ul = styled.ul`
    z-index: 10;
    position: absolute;
    width: 57%;
    margin-top: 0px;
    border: 1px solid #dfdfdf;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 5px -1px #e8e8e8;
    box-shadow: 0 2px 5px -1px #e8e8e8;
    font-weight: 700;
    padding: 15px 0;
    max-height: 215px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    @media screen and (max-width: 600px) {
      width: 75%;
    }`;

export const Li = styled.li`
    width: 100%;
    font-size: 1rem;
    padding: 8px 10px;
    line-height: 1.6rem;
    cursor: default;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:selected {
      color: #fff;
      background-color: #27435c;
    }
    &:hover {
      color: black;
      background-color: #27435c;
    }`;
