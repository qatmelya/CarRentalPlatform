import React from 'react';

export default function Dashboard() {
  return (
    <div>
      <div>
        <div class="ui right labeled button" role="button" tabindex="0">
          <button class="ui red button">
            <i aria-hidden="true" class="heart icon"></i>Like
          </button>
          <a class="ui red left pointing basic label">2,048</a>
        </div>
        <div class="ui right labeled button" role="button" tabindex="0">
          <button class="ui blue basic button">
            <i aria-hidden="true" class="fork icon"></i>Fork
          </button>
          <a class="ui blue left pointing basic label">2,048</a>
        </div>
      </div>
    </div>
  );
}
