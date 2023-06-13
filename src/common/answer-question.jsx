import Text from "@/components/UI/text";
import React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const AnswerQuestion = (props) => {
  const [faq, setFaq] = React.useState([]);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setFaq(props.faq);
  }, [props.faq]);

  const Bold_Text = ({ children }) => <span>{children}</span>;

  const Normal_Text = ({ children }) => <Text>{children}</Text>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold_Text>{text}</Bold_Text>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Normal_Text>{children}</Normal_Text>
      ),
    },
  };

  const onIndexChange = (i) => {
    if (index === i) {
      setIndex();
    } else {
      setIndex(i);
    }
  };

  return (
    <>
      <div className="faq-accordion">
        <div className="accordion" id="accordionExample">
          {faq?.map((item, i) => {
            const { question, answerV2 } = item.fields;
            return (
              <div key={i} className="accordion-items">
                <h2 className="accordion-header" id={i}>
                  <button
                    className={`accordion-button ${
                      index === i ? "" : "collapsed"
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    aria-expanded={index === i ? true : false}
                    onClick={() => onIndexChange(i)}
                  >
                    {question}
                  </button>
                </h2>
                <div
                  id={item.aria_controls}
                  className={`accordion-collapse collapse ${
                    index === i ? "show" : ""
                  }`}
                  aria-labelledby={item.accordion_id}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-content">
                    {documentToReactComponents(answerV2, options)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AnswerQuestion;
