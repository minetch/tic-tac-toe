type Props = {
  value: number | null | undefined;
  onClick: () => void;
};

export const Square = ({ value, onClick }: Props) => {
  return (
    <button className='square' onClick={onClick}>
      {value}
    </button>
  );
};
