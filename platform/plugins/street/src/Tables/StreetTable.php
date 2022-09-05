<?php

namespace Botble\Street\Tables;

use Illuminate\Support\Facades\Auth;
use BaseHelper;
use Botble\Base\Enums\BaseStatusEnum;
use Botble\Street\Repositories\Interfaces\StreetInterface;
use Botble\Table\Abstracts\TableAbstract;
use Illuminate\Contracts\Routing\UrlGenerator;
use Yajra\DataTables\DataTables;
use Html;

class StreetTable extends TableAbstract
{

    /**
     * @var bool
     */
    protected $hasActions = true;

    /**
     * @var bool
     */
    protected $hasFilter = true;

    /**
     * StreetTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param StreetInterface $streetRepository
     */
    public function __construct(DataTables $table, UrlGenerator $urlGenerator, StreetInterface $streetRepository)
    {
        parent::__construct($table, $urlGenerator);

        $this->repository = $streetRepository;

        if (!Auth::user()->hasAnyPermission(['street.edit', 'street.destroy'])) {
            $this->hasOperations = false;
            $this->hasActions = false;
        }
    }

    /**
     * {@inheritDoc}
     */
    public function ajax()
    {
        $data = $this->table
            ->eloquent($this->query())
            ->editColumn('name', function ($item) {
                if (!Auth::user()->hasPermission('street.edit')) {
                    return $item->name;
                }
                return Html::link(route('street.edit', $item->id), $item->name);
            })
            ->editColumn('checkbox', function ($item) {
                return $this->getCheckbox($item->id);
            })
            ->editColumn('code', function ($item) {
                return $item->code;
            })
            ->editColumn('district', function ($item) {
                return $item->district;
            })
            // ->editColumn('created_at', function ($item) {
            //     return BaseHelper::formatDate($item->created_at);
            // })
            // ->editColumn('status', function ($item) {
            //     return $item->status->toHtml();
            // })
            ->addColumn('operations', function ($item) {
                return $this->getOperations('street.edit', 'street.destroy', $item);
            });

        return $this->toJson($data);
    }

    /**
     * {@inheritDoc}
     */
    public function query()
    {
        $query = $this->repository->getModel()
            ->select([
               'id',
               'name',
               'code',
               'district',
            //    'created_at',
            //    'status',
           ]);

        return $this->applyScopes($query);
    }

    /**
     * {@inheritDoc}
     */
    public function columns()
    {
        return [
            'id' => [
                'title' => trans('core/base::tables.id'),
                'width' => '20px',
            ],
            'name' => [
                'title' => trans('core/base::tables.name'),
                'class' => 'text-start',
            ],
            'code' => [
                'title' => 'code',
                'class' => 'text-start',
            ],
            'district' => [
                'title' => 'district',
                'class' => 'text-start',
            ],
            // 'created_at' => [
            //     'title' => trans('core/base::tables.created_at'),
            //     'width' => '100px',
            // ],
            // 'status' => [
            //     'title' => trans('core/base::tables.status'),
            //     'width' => '100px',
            // ],
        ];
    }

    /**
     * {@inheritDoc}
     */
    public function buttons()
    {
        return $this->addCreateButton(route('street.create'), 'street.create');
    }

    /**
     * {@inheritDoc}
     */
    public function bulkActions(): array
    {
        return $this->addDeleteAction(route('street.deletes'), 'street.destroy', parent::bulkActions());
    }

    /**
     * {@inheritDoc}
     */
    public function getBulkChanges(): array
    {
        return [
            'name' => [
                'title'    => trans('core/base::tables.name'),
                'type'     => 'text',
                'validate' => 'required|max:120',
            ],
            // 'status' => [
            //     'title'    => trans('core/base::tables.status'),
            //     'type'     => 'select',
            //     'choices'  => BaseStatusEnum::labels(),
            //     'validate' => 'required|in:' . implode(',', BaseStatusEnum::values()),
            // ],
            // 'created_at' => [
            //     'title' => trans('core/base::tables.created_at'),
            //     'type'  => 'date',
            // ],
        ];
    }

    /**
     * @return array
     */
    public function getFilters(): array
    {
        return $this->getBulkChanges();
    }
}
