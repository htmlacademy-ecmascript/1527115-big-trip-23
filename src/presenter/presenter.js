import SortList from '../view/sort-list.js';
import TripFilter from '../view/trip-filter.js';
import TripInfo from '../view/trip-info.js';
import TripEventList from '../view/trip-event-list.js';
import TripEventItem from '../view/trip-event-item.js';
import EditorForm from '../view/editor-form.js';
import {render, RenderPosition} from '../render.js';

const TRIP_EVENT_COUNT = 3;

export default class Presenter {

  eventListComponent = new TripEventList();

  constructor() {
    this.tripMain = document.querySelector('.trip-main');
    this.headerContainer = this.tripMain.querySelector('.trip-main__trip-controls');
    this.tripControlFilters = this.tripMain.querySelector('.trip-controls__filters');
    this.tripEvents = document.querySelector('.trip-events');
    this.eventList = document.querySelector('.trip-events__list');
  }

  renderTripEvents() {
    render(new SortList(), this.tripEvents, RenderPosition.BEFOREEND);
  }

  renderTripMainHeader() {
    render(new TripFilter(), this.tripControlFilters, RenderPosition.BEFOREEND);
  }

  renderTripInfo() {
    render(new TripInfo(), this.tripMain, RenderPosition.AFTERBEGIN);
  }

  renderTripEventList() {
    render(this.eventListComponent, this.tripEvents, RenderPosition.BEFOREEND);
  }

  renderEditorForm() {
    render(new EditorForm(), this.eventListComponent.getElement());
  }

  renderTripeventItem() {
    for (let i = 0; i < TRIP_EVENT_COUNT; i++) {
      render(new TripEventItem(), this.eventListComponent.getElement());
    }
  }

  init() {
    this.renderTripEvents();
    this.renderTripMainHeader();
    this.renderTripInfo();
    this.renderTripEventList();
    this.renderEditorForm();
    this.renderTripeventItem();
  }
}
