import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Swipeable } from 'react-swipeable';
import { Chevron } from '../Chevron';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SlidesContainer = styled(Swipeable)`
  flex-grow: 1;
  margin: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  scroll-snap-type: x proximity;
`;

const ChildContainer = styled.div`
  min-width: ${({ width }) => width}px;
`;

const Arrow = styled(Chevron)`
  flex-shrink: 0;
  width: 1rem;
  cursor: pointer;
  opacity: ${({ disabled = false }) => (disabled ? 0.5 : 1)};
  padding: 0.125rem;

  &:focus {
    outline: 1px dotted var(--color-secondary);
  }
`;

const validNavKeys = [' ', 'Enter'];

export const Carousel = ({ children, className }) => {
  const slidesRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(
    () =>
      setCurrentSlide((current) => {
        let next = current + 1;

        if (next >= React.Children.count(children)) {
          next = React.Children.count(children) - 1;
        }

        return next;
      }),
    [children, setCurrentSlide]
  );
  const previousSlide = useCallback(
    () =>
      setCurrentSlide((current) => {
        let previous = current - 1;

        if (previous <= 0) {
          previous = 0;
        }

        return previous;
      }),
    [setCurrentSlide]
  );
  const nextSlideWithKey = useCallback(
    (event) => {
      if (validNavKeys.includes(event.key)) {
        event.preventDefault();
        nextSlide();
      }
    },
    [nextSlide]
  );
  const previousSlideWithKey = useCallback(
    (event) => {
      if (validNavKeys.includes(event.key)) {
        event.preventDefault();
        previousSlide();
      }
    },
    [previousSlide]
  );

  useEffect(() => {
    const width = slidesRef.current.offsetWidth;
    setSlideWidth(width);
  }, []);
  useEffect(() => {
    slidesRef.current.scrollTo({
      left: slideWidth * currentSlide,
      behavior: 'smooth',
    });

    // disable tabindex on all children that are not the current
    slidesRef.current
      .querySelectorAll(
        '[aria-hidden="true"] lilac-button, [aria-hidden="true"] a'
      )
      .forEach((elem) => elem.setAttribute('tabindex', -1));
    slidesRef.current
      .querySelectorAll(
        '[aria-hidden="false"] lilac-button, [aria-hidden="false"] a'
      )
      .forEach((elem) => elem.removeAttribute('tabindex'));
  }, [slideWidth, currentSlide]);

  return (
    <Container className={className}>
      <Arrow
        disabled={currentSlide <= 0}
        onClick={previousSlide}
        onKeyDown={previousSlideWithKey}
        alt="Volver a la slide anterior"
        role="button"
        tabIndex="0"
      />
      <SlidesContainer
        onSwipedRight={previousSlide}
        onSwipedLeft={nextSlide}
        innerRef={(el) => {
          slidesRef.current = el;
        }}
        preventDefaultTouchmoveEvent
      >
        {slideWidth !== null
          ? React.Children.map(children, (child, i) => (
              <ChildContainer
                width={slideWidth}
                key={
                  i /* eslint-disable-line react/no-array-index-key */
                }
                aria-hidden={i === currentSlide ? 'false' : 'true'}
              >
                {child}
              </ChildContainer>
            ))
          : null}
      </SlidesContainer>
      <Arrow
        direction="right"
        disabled={currentSlide >= React.Children.count(children) - 1}
        onClick={nextSlide}
        onKeyDown={nextSlideWithKey}
        alt="Ir a la slide siguiente"
        role="button"
        tabIndex="0"
      />
    </Container>
  );
};

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
};

Carousel.defaultProps = {
  className: null,
};
