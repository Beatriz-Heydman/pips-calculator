// Libs
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledResultsSection = styled.div`
  width: 100%;
  max-width: 92vw;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${fadeInUp} 0.4s ease-out;

  .results-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .results-list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .results-list::before {
    content: '';
    position: absolute;
    left: 11px;
    top: 24px;
    bottom: 24px;
    border-left: 2px dashed #d5dbea;
  }

  .result-card {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
    animation: ${fadeInUp} 0.4s ease-out backwards;
  }

  .result-card:nth-child(2) {
    animation-delay: 0.1s;
  }

  .result-card .marker {
    width: 24px;
    height: 24px;
    min-width: 24px;
    border-radius: 50%;
    z-index: 1;
    margin-top: 0.25rem;
  }

  .result-card.success .marker {
    background-color: #1a7d1a;
    box-shadow: 0 0 0 4px rgba(26, 125, 26, 0.15);
  }

  .result-card.warning .marker {
    background-color: #e08300;
    box-shadow: 0 0 0 4px rgba(224, 131, 0, 0.15);
  }

  .card {
    flex: 1;
    min-width: 0;
    background-color: #fefefe;
    border-radius: 0.75rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .result-card.success .card {
    background-color: #fdfffd;
  }

  .result-card.warning .card {
    background-color: #fffcf7;
  }

  .card-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .icon-container {
    width: 40px;
    height: 40px;
    min-width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .result-card.success .icon-container {
    background-color: #e6f4e6;
  }

  .result-card.warning .icon-container {
    background-color: #fdedd9;
  }

  .card-title {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 200px;
  }

  .badge {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
  }

  .result-card.success .badge {
    background-color: #e6f4e6;
    color: #1a7d1a;
  }

  .result-card.warning .badge {
    background-color: #fdedd9;
    color: #c25b00;
  }

  .card-divider {
    height: 1px;
  }

  .result-card.success .card-divider {
    background-color: #cafbca;
  }

  .result-card.warning .card-divider {
    background-color: #ffe9cb;
  }

  .card-stats {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`;
