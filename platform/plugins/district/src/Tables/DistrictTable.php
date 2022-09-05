<?php

namespace Botble\District\Tables;

use Illuminate\Support\Facades\Auth;
use BaseHelper;
use Botble\Base\Enums\BaseStatusEnum;
use Botble\District\Repositories\Interfaces\DistrictInterface;
use Botble\Table\Abstracts\TableAbstract;
use Illuminate\Contracts\Routing\UrlGenerator;
use Yajra\DataTables\DataTables;
use Html;

class DistrictTable extends TableAbstract
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
     * DistrictTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param DistrictInterface $districtRepository
     */
    public function __construct(DataTables $table, UrlGenerator $urlGenerator, DistrictInterface $districtRepository)
    {
        parent::__construct($table, $urlGenerator);

        $this->repository = $districtRepository;

        if (!Auth::user()->hasAnyPermission(['district.edit', 'district.destroy'])) {
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
                if (!Auth::user()->hasPermission('district.edit')) {
                    return $item->name;
                }
                return Html::link(route('district.edit', $item->id), $item->name);
            })
            ->editColumn('checkbox', function ($item) {
                return $this->getCheckbox($item->id);
            })
            ->editColumn('code', function ($item) {
                return $item->code;
            })
            ->editColumn('city', function ($item) {
                return $item->city;
            })
            // ->editColumn('created_at', function ($item) {
            //     return BaseHelper::formatDate($item->created_at);
            // })
            // ->editColumn('status', function ($item) {
            //     return $item->status->toHtml();
            // })
            ->addColumn('operations', function ($item) {
                return $this->getOperations('district.edit', 'district.destroy', $item);
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
               'code',
               'name',
               'city',
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
            'code' => [
                'title' => 'code',
                'class' => 'text-start',
            ],
            'name' => [
                'title' => trans('core/base::tables.name'),
                'class' => 'text-start',
            ],
            'city' => [
                'title' => 'city',
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
        return $this->addCreateButton(route('district.create'), 'district.create');
    }

    /**
     * {@inheritDoc}
     */
    public function bulkActions(): array
    {
        return $this->addDeleteAction(route('district.deletes'), 'district.destroy', parent::bulkActions());
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
