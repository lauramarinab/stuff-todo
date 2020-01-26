import * as React from "react";
import useSWR from "swr";
import { fetchData } from "../client";
import { Category } from "../types/Category";
import styled, { css } from "styled-components";
import { scrollbarVerticalStyle } from "./UI/ScrollbarStyle";
import { Icon } from "./UI/Icon";
import { TitleSection } from "./ListTodo/styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 20px;
  color: var(--light-grey);
  padding: 20px 0px;
`;

const Box = styled.div`
  height: 110px;
  width: 460px;
  padding: 15px;
  background: var(--primary-salmon);
  border-radius: 4px;
`;

const Ul = styled.ul`
  list-style-type: none;
  height: 100%;
  overflow: overlay;
  ${scrollbarVerticalStyle}
`;

const Li = styled.li<{ selected?: boolean }>`
  color: white;
  font-size: 15px;
  padding-bottom: 8px;
  cursor: pointer;

  ${props =>
      props.selected &&
      css`
        color: var(--dark-salmon);
        text-decoration: underline;
      `}
    :hover {
    color: var(--dark-salmon);
  }
`;

const SelectedCategory = styled(TitleSection)`
  margin: 20px 0px;
  width: 460px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface Props {
  selectedCategory: number | null;
  onSelectedCategory: (categoryId: number | null) => void;
}

const AllCategoryBox: React.FC<Props> = ({ selectedCategory, onSelectedCategory }) => {
  const [showCategories, setShowCategories] = React.useState(false);

  const { data, error } = useSWR<Array<Category>>("/category", fetchData);

  if (error) {
    return <div>error!</div>;
  }

  if (!data) {
    return (
      <Box style={{ opacity: "30%" }}>
        <Li>Loading category...</Li>
      </Box>
    );
  }

  const selectedCategoryName = data.find(c => c.id === selectedCategory);

  const removeCategory = () => {
    onSelectedCategory(null);
    setShowCategories(false);
  };

  return (
    <>
      <Wrapper>
        {!selectedCategory && <Title onClick={() => setShowCategories(true)}>Scegli una categoria</Title>}
        {selectedCategory && (
          <SelectedCategory>
            {selectedCategoryName?.name}
            <Icon
              name={showCategories ? "trash" : "edit"}
              onClick={() => (showCategories ? removeCategory() : setShowCategories(true))}
            />
          </SelectedCategory>
        )}
        {showCategories && (
          <Box>
            <Ul>
              {data.map(category => (
                <Li
                  key={category.id}
                  onClick={() => {
                    onSelectedCategory(category.id);
                    setShowCategories(false);
                  }}
                  selected={category.id === selectedCategory}
                >
                  {category.name}
                </Li>
              ))}
            </Ul>
          </Box>
        )}
      </Wrapper>
    </>
  );
};

export { AllCategoryBox };
