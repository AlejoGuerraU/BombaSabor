import React from "react";


const HeroTitle = ({ text }: { text: string }) => {
  return (
    <p className="text-[56px]">
      {text}
    </p>
  );
};

const MediumTitle = ({ text }: { text: string }) => {
  return (
    <p className="text-[40px]">
      {text}
    </p>
  );
};

const SubTitle = ({ text }: { text: string }) => {
  return (
    <p className="text-[28px]">
      {text}
    </p>
  );
};

const BigText = ({ text }: { text: string }) => {
  return (
    <p className="text-[25px]">
      {text}
    </p>
  );
};

const MidText = ({ text }: { text: string }) => {
  return (
    <p className="text-[22px]">
      {text}
    </p>
  );
};

const SmallText = ({ text }: { text: string }) => {
  return (
    <p className="text-[18px]">
      {text}
    </p>
  );
};

const SubTexto = ({ text }: { text: string }) => {
  return (
    <p className="text-[14px]">
      {text}
    </p>
  );
};

const SubTextoMini = ({ text }: { text: string }) => {
  return (
    <p className="text-[12px]">
      {text}
    </p>
  );
};

export { HeroTitle, MediumTitle, BigText, SubTitle, SmallText, MidText, SubTexto, SubTextoMini };
